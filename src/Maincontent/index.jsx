import React, { Component } from 'react';
import './index.css'
import fetchJsonp from 'fetch-jsonp'

class Maincontent extends Component{
    constructor(props){
        super(props)
        this.state = {
            listjson : [] ,
            currentIndex : props.tabActiveIndex,
        }
    }
    componentDidMount(){
        this.getfetchjsonpData(this.state.currentIndex, this.props.keyword)
    }
    render(){
        return(
            <div>
                <ul className="content">
                    {
                        this.state.listjson.map( (value, key) => {
                            return(
                                this.screenContent(value,key)
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        console.log('change ', this.props.keyword, nextProps.keyword)
        console.log('change1 ', this.props.tabActiveIndex, nextProps.tabActiveIndex)
        if(nextProps.tabActiveIndex !== this.state.currentIndex){
            this.setState({
                currentIndex : nextProps.tabActiveIndex
            })
        }
        if(nextProps.keyword !== this.props.keyword){
            this.getfetchjsonpData(this.state.currentIndex, nextProps.keyword)
        }
        
        // }
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.currentIndex === this.state.currentIndex){
    //         return true
    //     }
    //     return false
    // }

    
    getfetchjsonpData(id, keyword){
        let _this = this
        const url = this.decideClass(id, keyword)
        fetchJsonp(encodeURI(url))
        .then(function(response){
            return response.json()
        }).then(function(json){
            _this.setState({
                listjson: json.result,
            })
        }).catch(function(ex){
            console.log('parsing failed', ex)
        })
    }
    decideClass(id, keyword){
        let url = null
        switch(id){
            case 0 : url = 'http://sas.qq.com/cgi-bin/db/data?t=["ke_coding_book"]&q={ke_coding_book(_page:1,_limit:10,title:"'+ keyword + '%"){id,title,rating{max,numRaters,average,min},subtitle,author,pubdate,tags{count,name,title},origin_title,image,binding,translator,catalog,pages,images{small,large,medium},alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series{id,title}}}';break;
            case 1 : url = 'http://sas.qq.com/cgi-bin/db/data?t=["ke_coding_music"]&q={ke_coding_music(_page:1,_limit:10,title:"'+keyword+'%"){id,title,alt,rating{max,average,numRaters,min},author{name},alt_title,image,tags{count,name},mobile_link,attrs{publisher,singer,version,pubdate,title,media,tracks,discs}}}'; break;
            case 2 : url = 'http://sas.qq.com/cgi-bin/db/data?t=["ke_coding_movie"]&q={ke_coding_movie(_page:1,_limit:10,title:"'+keyword+'%"){id,title,rating{max,average,stars,min,details{score_1,score_2,score_3,score_4,score_5}},genres,casts{alt,avatars{small,large,medium},name,name_en,id},durations,mainland_pubdate,pubdates,has_video,collect_count,original_title,subtype,directors{alt,avatars{small,large,medium},name,id},year,images{small,large,medium},alt}}';break;
        }
        return url
    }
    screenContent(value, key){
        switch(this.state.currentIndex){
            case 0 : return <div className="main-content" key={key}><div className="con-img"><img src={value.images.small} alt="error!" className="img" /></div><ul className="con-describe"><li key={key} className="name">名称：{value.title}</li><li>作者：{value.author}</li><li>评分：{value.rating.average}</li><li>时间：{value.pubdate}</li></ul></div>;
            case 1 : return <div className="main-content" key={key}><div className="con-img"><img src={value.images} alt="error!" /></div><ul className="con-describe"><li key={key} className="name">名称：{value.title}</li><li>作者：{value.author.name}</li><li>评分：{value.rating.average}</li></ul></div>;
            case 2 : return <div className="main-content" key={key}><div className="con-img"><img src={value.images.small} alt="error!" /></div><ul className="con-describe"><li key={key} className="name">名称：{value.title}</li><li>作者：{value.title}</li><li>评分：{value.rating.average}</li></ul></div>;
        }
    }
};

module.exports = Maincontent