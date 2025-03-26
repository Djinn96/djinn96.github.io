// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Some projects that I&#39;ve been working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repository",
          title: "Repository",
          description: "My GitHub profile and repository, for what it&#39;s worth.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-solving-jane-street-feb-2025",
      
        title: 'Solving Jane Street: Feb 2025 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Top Score (Give or Take) I&amp;#8217;ve recently found out about an interesting repository of puzzles from Jane Street and decided to try solving the puzzle of the month. Unlike most puzzles in their archive, this was a wordy one. Right off the bat, the puzzle gives us some clues in the form of position, colourContinue reading &quot;Solving Jane Street: Feb&amp;#160;2025&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2025/03/03/solving-jane-street-feb-2025/", "_blank");
        
      },
    },{id: "post-agriculture-of-malaysia",
      
        title: 'Agriculture of Malaysia <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "A simple dashboard showing the agriculture sector of Malaysia from 2017 to 2022. For interactive visualization, go to the Tableau Public website linked below. Agriculture in Malaysia &amp;#8211; Tableau",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2025/02/26/agriculture-of-malaysia/", "_blank");
        
      },
    },{id: "post-interlude-in-japan",
      
        title: 'Interlude in Japan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "5 months, 2 weeks, and a bit. Not an ideal duration between posts, but I&amp;#8217;ll make do. I could make excuses, what with beam time experiments and PhD confirmation going on, but I&amp;#8217;d rather take some time to reflect on the last several months. The last time I posted, it was right in the middleContinue reading &quot;Interlude in Japan&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2022/06/24/interlude-in-japan/", "_blank");
        
      },
    },{id: "post-malaysia-by-elevation",
      
        title: 'Malaysia by Elevation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Shaded Relief Map of Malaysia This map was made after taking inspiration of other shaded relief maps made by Joe Davies. Steps to produce such maps can be be found here. Four colours were used to shade this map by elevation. These colours were chosen based on the Malaysian flag. Red and white, which areContinue reading &quot;Malaysia by Elevation&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2022/06/22/malaysia-by-elevation/", "_blank");
        
      },
    },{id: "post-new-year-new-weather",
      
        title: 'New Year, New Weather <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Even if it&amp;#8217;s just for a day. Born and raised in a tropical country, I&amp;#8217;ve never experienced a change in weather of more than 10 degrees. Which is to say that I&amp;#8217;m not one to check the weather before I leave home. With weather as cold as Japan&amp;#8217;s, I was looking forward to see theContinue reading &quot;New Year, New&amp;#160;Weather&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2022/01/09/new-year-new-weather/", "_blank");
        
      },
    },{id: "post-japan-the-first-three-weeks",
      
        title: 'Japan – The First Three Weeks <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "It&amp;#8217;s been 3 weeks since the last post. I think it&amp;#8217;s fair to say that I really have to work on my motivation to write. My excuse is that I am still getting used to the new environment, but then again, I had time to go on a day trip to Tokyo so that pointContinue reading &quot;Japan &amp;#8211; The First Three&amp;#160;Weeks&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2021/12/25/japan-the-first-three-weeks/", "_blank");
        
      },
    },{id: "post-the-end-of-a-transition",
      
        title: 'The End of a Transition <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "As I lie in bed typing this out, it&amp;#8217;s my last day of quarantine. In less than an hour, I will be allowed to leave these four walls which I have been staring for the past two weeks. It&amp;#8217;s not all bad. Sure, the apartment is small, but the amenities are more than sufficient. AlsoContinue reading &quot;The End of a&amp;#160;Transition&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2021/12/01/the-end-of-a-transition/", "_blank");
        
      },
    },{id: "post-the-first-post",
      
        title: 'The First Post <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "As with all stories which began since the starts of this decade, mine begins in quarantine. Arriving in Narita Airport, Tokyo, I look ahead to 2 weeks of solitude, broken only by the company of friends and loved ones through the miracle that is the internet. The decision to move here was made almost 2Continue reading &quot;The First Post&quot;",
      section: "Posts",
      handler: () => {
        
          window.open("https://yapjinnming.wordpress.com/2021/11/21/the-first-post/", "_blank");
        
      },
    },{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1984/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/brave_new_world/";
            },},{id: "books-fahrenheit-451",
          title: 'fahrenheit 451',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fahrenheit_451/";
            },},{id: "books-how-asia-works",
          title: 'How Asia Works',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_asia_works/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-agriculture-of-malaysia",
          title: 'Agriculture of Malaysia',
          description: "A simple dashboard of Malaysia&#39;s agriculture sector from 2017 to 2022.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agriculture_of_malaysia/";
            },},{id: "projects-malaysia-by-elevation",
          title: 'Malaysia by Elevation',
          description: "Shaded Relief Map of Malaysia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/malaysia_by_elevation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%70%6A%69%6E%6E%6D%69%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jinn-ming", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
