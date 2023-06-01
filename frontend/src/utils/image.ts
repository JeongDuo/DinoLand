export const getImageLoader = () => {
  const imageArr: HTMLImageElement[] = [];

  return (imgSrcList: string[]) => {
    if (imageArr.length > 0) return;

    for (let i = 0; i < imgSrcList.length; i++) {
      imageArr[i] = new Image();
      imageArr[i].src = imgSrcList[i];
    }
  };
};
