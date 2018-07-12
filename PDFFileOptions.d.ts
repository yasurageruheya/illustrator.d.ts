/**
 * Options for opening a PDF file, used with the {@link Application#open} method. All properties are optional.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link pageToOpen}
 * ･ {@link parent}
 * ･ {@link pDFCropToBox}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Opening a PDF with options
 *     // Opens a PDF file with specified options
 *
 *     var pdfOptions = app.preferences.PDFFileOptions;
 *     pdfOptions.pDFCropToBox = PDFBoxType.PDFBOUNDINGBOX;
 *     pdfOptions.pageToOpen = 2;
 *
 *     // Open a file using these preferences
 *     var fileRef = filePath;
 *     if (fileRef != null) {
 *         var docRef = open(fileRef, DocumentColorSpace.RGB);
 *     }
 */
declare class PDFFileOptions extends OpenOptions
{
	/**
	 * What page should be used when opening a multipage document. Default: 1
	 * @type {Number} long
	 * @see {@link PDFFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageToOpen:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link PDFFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Which box should be used when placing a multipage document. Default: {@link PDFBoxType.PDFMEDIABOX}
	 * @type {PDFBoxType}
	 * @see {@link PDFFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFCropToBox:PDFBoxType;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PDFFileOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}