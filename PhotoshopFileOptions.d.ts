/**
 * Options for opening a Photoshop file, used with the {@link Application#open} method. All properties are optional.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link parent}
 * ･ {@link pixelAspectRatioCorrection}
 * ･ {@link preserveImageMaps}
 * ･ {@link preserveLayers}
 * ･ {@link preserveSlices}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Opening a Photoshop file
 *     // Opens a Photoshop file containing layers with
 *     // preferences set to preserve layers
 *
 *     var psdOptions = preferences.photoshopFileOptions;
 *     psdOptions.preserveLayers = true;
 *     psdOptions.pixelAspectRatioCorrection = false;
 *     // open a file using these prefs
 *     var fileRef = File(psdFilePath);
 *     if (fileRef != null) {
 *         var docRef = open(fileRef, DocumentColorSpace.RGB);
 *     }
 */
declare class PhotoshopFileOptions extends OpenOptions
{
	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link PhotoshopFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * If <b>true</b>, imported images that have a non-square pixel aspect ratio should be adjusted.
	 * @type {Boolean}
	 * @see {@link PhotoshopFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	pixelAspectRatioCorrection:Boolean;

	/**
	 * If <b>true</b>, image maps should be preserved when document is converted. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PhotoshopFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	preserveImageMaps:Boolean;

	/**
	 * If <b>true</b>, layers should be preserved when document is converted. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PhotoshopFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	preserveLayers:Boolean;

	/**
	 * If <b>true</b>, slices should be preserved when document is converted. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PhotoshopFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	preserveSlices:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PhotoshopFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}