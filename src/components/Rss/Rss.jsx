import React from "react";


class FetchDataFromRSSFeed extends React.Component {
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
            this.setState({items: json.items});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                Check out our blog:
                {this.state.items.map(item => (
                    <li key={item.guid}>
                        <a target="_blank" rel="noopener noreferrer" href={item.link}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </div>
        );
    }
}


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
}

