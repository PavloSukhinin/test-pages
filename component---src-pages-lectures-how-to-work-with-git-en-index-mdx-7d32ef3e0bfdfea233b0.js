"use strict";(self.webpackChunkbinary_studio_academy_2021_stage_2=self.webpackChunkbinary_studio_academy_2021_stage_2||[]).push([[362],{3854:function(e,t,a){a.r(t),a.d(t,{metadata:function(){return r},_frontmatter:function(){return m},default:function(){return g}});var n=a(3366),o=(a(7294),a(4983)),i=a(5361),l=a(5081),s=["components"],r={orderId:1,author:"Viktoriia Vasylenko",title:"How to work with Git",description:"Viktoriia is telling about <strong>Git</strong> basics and common Git commands. She also shows the whole process of working with Git: from cloning the repository to creating pull requests.",keywords:["hola","guapa"],duration:"38 min",publishedAt:"2021-12-08T10:00:00",hiddenFromMainPage:!0},m={},c={metadata:r,_frontmatter:m},p=i.Fq;function g(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",null,(0,o.kt)("h1",null,(0,o.kt)("strong",null,"How to work with Git"))),(0,o.kt)(i.SQ,{currentLanguage:"en",languages:{en:"lectures/how-to-work-with-git/en",ua:"lectures/how-to-work-with-git/ua"},mdxType:"Language"}),(0,o.kt)("div",null,(0,o.kt)("div",{className:"author"},(0,o.kt)("div",{className:"avatar-wrapper"},(0,o.kt)("object",{className:"avatar-object",role:"img",data:l.VI,"aria-label":"Viktoriia Vasylenko"})),(0,o.kt)("div",{className:"profile"},(0,o.kt)("h3",{className:"name"},"Viktoriia Vasylenko"),(0,o.kt)("p",{className:"about"},"Viktoriia works at Binary Studio as a Full stack developer after finishing Binary Studio Academy in 2020."))),(0,o.kt)("div",{className:"bubble",style:{margin:"-0.5em 1em 1em"}},(0,o.kt)("strong",null,"Hi, student!")," 👋",(0,o.kt)("br",null),"Welcome to the Git lecture. Here you'll find a short script to the lecture with Git commands and useful links. Let's go!")),(0,o.kt)("div",{id:"table-of-contents",className:"table-of-contents",style:{marginTop:"2em"}},(0,o.kt)("h2",null,(0,o.kt)("strong",null,"Lecture plan")),(0,o.kt)(i.Nv,{timeline:[{linkTo:"#setting-up-the-repository",title:"Setting up the repository"},{linkTo:"#practicing-git",title:(0,o.kt)("span",null,"Common ",(0,o.kt)("code",null,"git")," commands")},{linkTo:"#git-flow",title:"Git flow"},{linkTo:"#undo-changes",title:"Undo the changes"}],mdxType:"TimelineOfContents"})),(0,o.kt)(i.U1,{duration:"33m 31s",mdxType:"VideoWrapper"},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/czNvX0xdFZA",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,o.kt)(i.aC,{id:"setting-up-the-repository",number:"1",name:"Setting up the repository",difficulty:"Beginner",objectives:"How to create and clone the repo",mdxType:"Level"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before you clone the repository set up either PAT (personal access token) or SSH keys.\nYou may find this helpful - "),(0,o.kt)("a",{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},(0,o.kt)("strong",null,"How to set up PAT")),",",(0,o.kt)("a",{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},(0,o.kt)("strong",null,"How to set up SSH keys")),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To clone the repositoty use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git clone")," command + copied repository URL.  "),(0,o.kt)("p",{parentName:"li"},"In case you choose https it will look like:  "),(0,o.kt)("div",{parentName:"li",className:"gatsby-highlight","data-language":"text"},(0,o.kt)("pre",{parentName:"div",className:"language-text"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/<my-username>/homepage.git"))),(0,o.kt)("p",{parentName:"li"},"In case of SSH: "),(0,o.kt)("div",{parentName:"li",className:"gatsby-highlight","data-language":"text"},(0,o.kt)("pre",{parentName:"div",className:"language-text"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git clone git@github.com:<my-username>/homepage.git")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git remote show origin")," to see remote repository URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("code",{parentName:"p",className:"language-text"},"git status")," command will display the state of your repositoty and staging area.\nUse it to see which files are added to the staging area and are going to be included in commit."))),(0,o.kt)(i.aC,{id:"practicing-git",number:"2",name:(0,o.kt)("span",null,"Common ",(0,o.kt)("code",null,"git")," commands"),difficulty:"Beginner",objectives:"How to create commits and branches",mdxType:"Level"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To add changed files to the staging area we use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git add")," command + file name.\nYou may use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git add .")," command to add ",(0,o.kt)("strong",null,"all")," changed and untracked files.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a commit use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git commit")," command. To add a description message use "),(0,o.kt)("div",{parentName:"li",className:"gatsby-highlight","data-language":"text"},(0,o.kt)("pre",{parentName:"div",className:"language-text"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'git commit -m "Your message here"')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git branch")," command to see local branches and ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git checkout branch-name")," to switch to the branch.",(0,o.kt)("br",{parentName:"p"}),"\n","To create a new branch and switch to it use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git checkout -b branch-name")," command.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("code",{parentName:"p",className:"language-text"},"git log")," command shows commit history of your branch.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To update your remote branch use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git push")," command.\nIf your local branch doesn't exists on the remote you might need to run ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git push --set-upstream branch-name"),"\nor just ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git push -u branch-name"),", which means the same. Otherwise you may explicitly set\na remote branch you want to push your changes to, like ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git push origin branch-name"),".  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Git stash is handy when you're not ready to commit yet. ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git stash")," command will add your changes\nto stash, ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git stash list")," will show you all available stashes, and ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git stash pop")," with apply\nyour changes back.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To follow you teammates changes you might need to run ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git fetch")," command. ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git fetch")," downloads\ncommits, files, or new branches from a remote repository into your local repo. After that you may\nmerge remote branch changes into your local branch (by using ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git merge branch-name")," command).\nYou may use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git pull")," command to fetch changes froma  remote branch and merge them at one time.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case you forgot to add some files to your last commit or noticed a typo in a message you may use ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git commit --ammend"),". "))),(0,o.kt)(i.aC,{id:"git-flow",number:"3",name:"Git flow",difficulty:"Intermediate",objectives:"How to create pull requests",mdxType:"Level"}),(0,o.kt)("p",null,"You might need/want/like to follow the next steps during yout work with a repository:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create branches - create a separate branch for every feature  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add commits - make small commits with a meaningful messages  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a Pull request - open PR to discuss, review and approve your changes  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Merge to the main branch  "))),(0,o.kt)(i.aC,{id:"undo-changes",number:"4",name:"Undo the changes",difficulty:"Hard",objectives:"How to revert or reset commits",mdxType:"Level"}),(0,o.kt)("p",null,"To undo you changes you may use two commands: ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git revert")," or ",(0,o.kt)("code",{parentName:"p",className:"language-text"},"git reset"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("code",{parentName:"p",className:"language-text"},"git revert HEAD")," creates a new commit with the inverse of the last commit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("code",{parentName:"p",className:"language-text"},"git reset <commit>")," clears the commit history until the given commit."))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-how-to-work-with-git-en-index-mdx-7d32ef3e0bfdfea233b0.js.map