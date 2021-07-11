import React from "react";
import style from "./Rss.module.css";

export default class FetchDataFromRSSFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.nydailynews.com%2Farcio%2Frss%2Fcategory%2Fnews%2F%3Fquery%3Ddisplay_date%3A%255Bnow-2d%2BTO%2Bnow%255D%2BAND%2Brevision.published%3Atrue%26sort%3Ddisplay_date%3Adesc%23nt%3Dinstory-link"
            );
            const json = await response.json();
            this.setState({items: json.items, pubDate: json.items.pubDate, title: json.feed.title});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className={style.rssWrapHead}>
                <div className={style.textHead}>
                    <p className={style.feedTitle}>{this.state.title}</p>
                </div>
                <hr/>
                <div className={style.oneWraper}>
                    {this.state.items.map(item => (
                        <div>
                        <hr className={style.hrline}/>
                        <ul className={style.twoWraper}>

                            <li>

                                <p>
                                    By {item.author} || PubData: {item.pubDate}
                                </p>
                            </li>

                            <li key={item.guid}>
                                <p><img className={style.imageFeed} src={item.enclosure.link} alt="img"/>
                                    {item.description}
                                    <br/>
                                    <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                        {item.title}
                                    </a>
                                </p>


                            </li>

                        </ul>
                        </div>
                    ))}

                </div>


            </div>
        );
    }
}
/*

export const RssFeed = () => {
    return (
        <div className="rssFeedHead">
            <div className="rssFeedWrapOne">
                <divc className="rssFeedWrapTwo">
                    <FetchDataFromRSSFeed/>
                </divc>
            </div>
        </div>

    )
}*/

