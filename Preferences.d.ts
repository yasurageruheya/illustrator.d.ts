/**
 * Specifies the preferred options for Adobe PDF and Adobe Photoshop files.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link parent}
 * ･ {@link PDFFileOptions}
 * ･ {@link photoshopFileOptions}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class Preferences
{
	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. Options to use when opening or placing a PDF file.
	 * @const
	 * @type {PDFFileOptions} {@link PDFFileOptions} object
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly PDFFileOptions:PDFFileOptions;

	/**
	 * Read-only. Options to use when opening or placing a Photoshop file.
	 * @const
	 * @type {PhotoshopFileOptions} {@link PhotoshopFileOptions} object
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly photoshopFileOptions:PhotoshopFileOptions;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}