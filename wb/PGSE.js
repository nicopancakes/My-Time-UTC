javascript:(function(){
  document.head.innerHTML='<meta charset="utf-8"><title>Search</title><meta name="viewport" content="width=device-width,initial-scale=1">';
  document.body.innerHTML='';
  document.body.style.margin='0';
  const style=document.createElement('style');
  style.textContent='body{background:#fff;font-family:arial,sans-serif;padding:20px 0}.cse-wrapper{max-width:100%;max-width:900px;margin:0 auto}';
  document.head.appendChild(style);

  const container=document.createElement('div');
  container.className='cse-wrapper';
  document.body.appendChild(container);

  const cx='35f258c7bdf8d4e02';
  const script=document.createElement('script');
  script.src='https://cse.google.com/cse.js?cx='+cx;
  script.async=true;
  document.head.appendChild(script);

  window.__gcse={
    parsetags:'explicit',
    initializationCallback:function(){
      google.search.cse.element.render({
        div:container,
        tag:'search',
        gname:'g'
      });
      google.search.cse.element.render({
        div:container,
        tag:'searchresults-only',
        gname:'g',
        attributes:{linkTarget:'_self'}
      });

      const config={
        cx:cx,
        safe:"off",
        uiOptions:{
          numTopAds:0,
          resultSetSize:"",
          isSafeSearchActive:false,
          enableAutoComplete:true,
          enableImageSearch:true,
          enableOrderBy:true,
          orderByOptions:[{"label":"Relevance","key":""},{"label":"Date","key":"date"}],
          numTopRefinements:-1
        }
      };
      google.search.cse.element.init(config);
      google.search.cse.element.go('g');
    }
  };
})();
