const Tutorials=[["HTML 教程","/html"],["JavaScript 教程","/javascript"],["ES6 教程","/es6"],["Web API 教程","/webapi"],["C 语言教程","/clang"],["Bash 教程","/bash"],["SSH 教程","/ssh"]];function showDropdownMenu(){var menu=document.querySelector("nav div.container div.navbar-menu");if(menu){var start=document.createElement("div"),item=(start.classList.add("navbar-start"),document.createElement("div")),arrow=(item.classList.add("navbar-item"),item.classList.add("has-dropdown"),item.classList.add("is-hoverable"),document.createElement("a")),dropdown=(arrow.classList.add("navbar-link"),arrow.classList.add("is-hidden-touch"),item.appendChild(arrow),document.createElement("div"));dropdown.classList.add("navbar-dropdown");for(var i=0;i<Tutorials.length;i++){var link=document.createElement("a"),textNode=(link.classList.add("navbar-item"),link.href=Tutorials[i][1],document.createTextNode(Tutorials[i][0]));link.appendChild(textNode),dropdown.appendChild(link)}item.appendChild(dropdown),start.appendChild(item);arrow=document.querySelector("nav div.container div.navbar-menu div.navbar-end");arrow?menu.insertBefore(start,arrow):menu.appendChild(start)}}function showSupBanner(){var bannerDiv,bannerButton;new Date(2022,4,23)-new Date<0||(window.location.pathname.split("/")[1],"undefined"!=typeof LOPPO&&LOPPO.current_path&&"/"!==LOPPO.current_path.substr(-1)&&((bannerDiv=document.createElement("div")).classList.add("notification","is-link","is-light","is-size-7","p-3"),(bannerButton=document.createElement("button")).classList.add("delete"),bannerButton.setAttribute("onclick","this.parentNode.parentNode.removeChild(this.parentNode)"),bannerDiv.appendChild(bannerButton),bannerButton=document.createElement("p"),bannerDiv.appendChild(bannerButton),bannerButton.innerHTML='<a href="https://www.apifox.cn/?utm_source=wangdao" target="_blank" style="color: #333333;text-decoration:none;"><i class="fa fa-hand-o-right" aria-hidden="true"></i> API 开发管理神器<span style="color: #4682BE;font-weight: 700;"> Apifox</span>，同时集成 Postman + Swagger + Mock + JMeter，API 文档、API 调试、API Mock、API 自动测试一体化，点击<span style="color: #4682BE;font-weight: 700;">这里</span>下载使用。</a>',bannerButton=document.querySelector(".page-meta"))&&bannerButton.parentElement.insertBefore(bannerDiv,bannerButton.nextSibling))}showDropdownMenu(),showSupBanner();
