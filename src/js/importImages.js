const importImages = () => {
	require.context(`../images/photos`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/);
    require.context(`../images/prints`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/);
    require.context(`../images/canvas`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/);
    require.context(`../images/memorabilia`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/);
    require.context(`../images/shadow-frame`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/);
	require.context(`../images`, false, /\.(png|jpe?g|JPG|JPEG|svg)$/);
};

export default importImages;