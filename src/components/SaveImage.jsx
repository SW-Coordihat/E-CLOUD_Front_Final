
const ImageDownload = (props) => {
    const imageUrl = props.imageUrl

    const handleDownloadClick = () => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "image_for_edu";
        link.click();
      };
}