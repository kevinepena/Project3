import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Article from "../../components/Article"
import "./Home.css";


class Home extends Component {
  state = {
    blogs: [
      {
        _id: 1,
        title: "Government allies rough up priests at Nicaragua church siege",
        link: "https://www.washingtonpost.com/world/the_americas/government-allies-rough-up-priests-at-nicaragua-church-siege/2018/07/09/33d97884-83b5-11e8-9e06-4db52ac42e05_story.html?noredirect=on&utm_term=.006210c63855",
        img: "https://www.washingtonpost.com/resizer/ZyClnmEGixRx3lI_2Fz02T-pgNA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SLVZC2EDYQI6RHQGJW2SVRBOAU.jpg",
        source: "Washington Post"
      },
      {
        _id: 2,
        title: "Nicaragua: State repression has reached deplorable levels",
        link: "https://www.amnesty.org/en/latest/news/2018/07/nicaragua-represion-estatal-ha-llegado-a-niveles-deplorables/",
        img: "https://www.amnesty.org/remote.axd/aineupstrmedia.blob.core.windows.net/media/18575/inti-ocon-afp-getty-images.jpg?preset=fixed_1472_42_hi",
        source: "Amnesty"
      },
      {
        _id: 3,
        title: "Nicaragua is following Venezuela’s path to despair",
        link: "https://www.washingtonpost.com/opinions/nicaragua-is-following-venezuelas-path-to-despair/2018/07/11/b2e9ba38-846b-11e8-9e80-403a221946a7_story.html?noredirect=on&utm_term=.5710ed4a4d93",
        img: "https://www.washingtonpost.com/resizer/cMyDMgionXkb_NCaTqRIr9v9zS4=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZCAMIGUFIUI6RBKTUPHISA3MPA.jpg",
        source: "Washington Post"
      },
      {
        _id: 4,
        title: "Trump administration: Nicaragua’s Daniel Ortega & family need to ‘get out of the way’",
        link: "https://www.mcclatchydc.com/news/politics-government/white-house/article214790385.html",
        img: "https://www.mcclatchy-wires.com/incoming/vb6m76/picture214523579/alternates/LANDSCAPE_1140/Nicaragua_Protests_33544.jpg",
        source: ""
      },
      {
        _id: 5,
        title: "Country so dangerous tourists aren’t going there anymore",
        link: "https://www.news.com.au/travel/travel-updates/warnings/country-so-dangerous-tourists-arent-going-there-anymore/news-story/9958b9fb1df2cd82094ac384120444ea",
        img: "https://cdn.newsapi.com.au/image/v1/fac49a3567e3296f088386b3809d55d3",
        source: ""
      },
      {
        _id: 6,
        title: "Nicaragua Protests: American journalist live tweets while trapped during bloody church siege",
        link: "https://www.newsweek.com/nicaraguan-protest-trapped-journalists-students-church-1024572",
        img: "",
        source: "News Week"
      },
      {
        _id: 7,
        title: "Nicaragua crisis: One student killed as bloody church siege ends",
        link: "https://www.bbc.com/news/world-latin-america-44834188",
        img: "https://ichef.bbci.co.uk/news/660/cpsprodpb/F804/production/_102529436_tv048139894.jpg",
        source: "BBC"
      },
      {
        _id: 8,
        title: "Deadly siege on Nicaraguan church following months of unrest",
        link: "https://www.nbcnews.com/nightly-news/video/deadly-siege-on-nicaraguan-church-following-months-of-unrest-1277137987607",
        img: "",
        source: "NBC News"
      },
      {
        _id: 9,
        title: "Violent Nicaragua protests claim another 10 lives: rights group",
        link: "https://www.reuters.com/article/us-nicaragua-protests/violent-nicaragua-protests-claim-another-10-lives-rights-group-idUSKBN1K515N",
        img: "https://s3.reutersmedia.net/resources/r/?m=02&d=20180716&t=2&i=1283573129&r=LYNXMPEE6F00M&w=2560",
        source: "Reuters"
      }

    ]
  };

  refreshBlogs() {
    console.log("this should go!");
    API.getArticle().then(res => {
      console.log(res.data);
      this.setState({ blogs: res.data });
    });
  }

  componentDidMount() {
    // this.refreshBlogs();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };



  render() {
    const loggedIn = this.props.auth.isAuthenticated();
    const canWrite = this.props.auth.userHasScopes(["write:blog"]);
    return (
      <div>

        <Article />
        <br />
        <br />
        <br />
        <div>
          {/* Map each of our posts */
            this.state.blogs.map(post => (
              <div className="article" key={post._id}>

                <div className="top">
                
                  <div className="link">
                    <a href={post.link}>{post.title}</a>
                  </div>

                  {(post.img === "") ? <img className="cardimg" src="/assets/images/placeholder.png" /> : <img className="cardimg" src={post.img} />}
                </div>

                <div className="social">

                  <button className="socialbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z" /></svg>
                  </button>

                  <button className="socialbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path d="M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z" /></svg>
                  </button>

                  <button className="socialbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" /></svg>
                  </button>
                </div>

                {/* <h5>Created at: {post.createdAt}</h5> */}
                {/* <p><em>{post.body}</em></p> */}

              </div>
            ))}
          <div>

          </div>

        </div>
      </div>
    );
  }
}

export default Home;
