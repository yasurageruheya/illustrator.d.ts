/**
 * Options for exporting a document as a TIFF file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS6
 * @version CS6
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link artboardRange}
 * ･ {@link byteOrder}
 * ･ {@link imageColorSpace}
 * ･ {@link IZWCompression}
 * ･ {@link resolution}
 * ･ {@link saveMultipleArtboards}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to TIFF format
 *     // Exports current document to dest as a TIFF file with specified
 *     // options, dest contains the full path including the file name
 *
 *     function exportFileToPSD(dest) {
 *         if (app.documents.length > 0) {
 *             var exportOptions = new ExportOptionsTIFF();
 *             var type = ExportType.TIFF;
 *             var fileSpec = new File(dest);
 *             exportOptions.resolution = 150;
 *             exportOptions.byteOrder = TIFFByteOrder.IBMPC;
 *             exportOptions.IZWCompression = false;
 *             app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *         }
 *     }
 */
declare class ExportOptionsTIFF
{
	/**
	 * If <b>true</b>, the exported image should be anti-aliased. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	antiAliasing:Boolean;

	/**
	 * If {@link saveMultipleArtboards} is <b>true</b>, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: <b>empty string</b>
	 * @type {String}
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	artboardRange:String;

	/**
	 * The byte order to use in the new file.
	 * @type {TIFFByteOrder}
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	byteOrder:TIFFByteOrder;

	/**
	 * The color space of the exported file. Default: {@link ImageColorSpace.RGB}
	 * @type {ImageColorSpace}
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	imageColorSpace:ImageColorSpace;

	/**
	 * If <b>true</b>, use IZW compression in the new file.
	 * @type {Boolean}
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	IZWCompression:Boolean;

	/**
	 * Resolution of the exported file in dots per inch (dpi). Range: <b>72.0 to 2400.0</b>. Default: <b>150.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	resolution:Number;

	/**
	 * If <b>true</b>, all artboards or range of artboards are saved. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsTIFF}
	 * @since CS6
	 * @version CS6
	 */
	saveMultipleArtboards:Boolean;
}