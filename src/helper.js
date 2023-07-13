export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.5)"
    }
}

export const productRouteCapitalizeEachLetter = str => {
    str = str.replaceAll("-", " ")

    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const newStr = arr.join(" ");

    return newStr
}

export const productOwlCarouselSetting = {
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dots:false,
    responsive:{ 0:{ items:1 }, 600:{ items:3 }, 1000:{ items:5 } }
}