function loadScript(src, callback) {
    let script = document.createElement('script');
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`the, scipt #{script.src} is loaded`);
    alert(_);
});