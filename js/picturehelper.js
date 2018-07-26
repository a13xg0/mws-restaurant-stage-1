/**
 * Common picture formatting helper functions.
 */
class PictureHelper {


    /**
     * Create picture element with predefined image types and
     * appropriate media queries for resolutions
     * @param {Element} pictureElement
     * @param {Object} restaurantInfo
     */
    static constructPictureTag(pictureElement, restaurantInfo) {
        // These two sources works well on both pages pig and small, because on both of them we fall on two-columns
        // layout after 700px  we didn't add third source because it is usable for desktop devices, where bandwidth are
        // not limited and third condition of switching would add redundant complexity

        const sourceSmall = document.createElement('source');
        sourceSmall.srcset = `img/${restaurantInfo.photograph}-400_1x.jpg 1x, img/${restaurantInfo.photograph}-800_2x.jpg 2x`;
        sourceSmall.media = '(max-width: 500px), (min-width:701px) and (max-width:900px)';

        pictureElement.appendChild(sourceSmall);

        const sourceBig = document.createElement('source');
        sourceBig.srcset = `img/${restaurantInfo.photograph}-800_1x.jpg 1x, img/${restaurantInfo.photograph}-1600_2x.jpg 2x`;
        sourceBig.media = '(min-width: 501px) and (max-width: 700px), (min-width:901px)';

        pictureElement.appendChild(sourceBig);

        // create fallback image
        const image = document.createElement('img');
        image.className = 'restaurant-img photo';
        image.src = DBHelper.imageUrlForRestaurant(restaurantInfo);
        image.alt = restaurantInfo.photo_alt;
        image.title = restaurantInfo.name;

        pictureElement.appendChild(image);

    }
}
