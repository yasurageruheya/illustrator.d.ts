/**
 * Options for exporting a document as a Macromedia® Flash™ (SWF) file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link artBoardClipping}
 * ･ {@link backgroundColor}
 * ･ {@link backgroundLayers}
 * ･ {@link blendAnimation}
 * ･ {@link compressed}
 * ･ {@link convertTextToOutlines}
 * ･ {@link curveQuality}
 * ･ {@link exportStyle}
 * ･ {@link flattenOutput}
 * ･ {@link frameRate}
 * ･ {@link generateHTML}
 * ･ {@link imageFormat}
 * ･ {@link jpegMethod}
 * ･ {@link jpegQuality}
 * ･ {@link layerOrder}
 * ･ {@link looping}
 * ･ {@link readOnly}
 * ･ {@link replacing}
 * ･ {@link resolution}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to Flash format
 *     // Export current document as a Flash file with 150 dpi
 *     if (app.documents.length > 0) {
 *         var exportOptions = new ExportOptionsFlash();
 *         var type = ExportType.FLASH;
 *         var fileSpec = new File("~/sample.swf");
 *         exportOptions.resolution = 150;
 *         app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *     }
 */
declare class ExportOptionsFlash extends ExportOptions
{
	/**
	 * If <b>true</b>, the exported image can be clipped to the art board. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	artBoardClipping:Boolean;

	/**
	 * The background color of the exported Flash frames.
	 * @type {RGBColor} {@link RGBColor} object
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	backgroundColor:RGBColor;

	/**
	 * A list of layers to be included as the static background of the exported Flash frames.
	 * @type {Layer[]} array of {@link Layer} object
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	backgroundLayers:Layer[];

	/**
	 * How the blend art objects are animated when exported to Flash frames. Default: {@link BlendAnimationType.NOBLENDANIMATION}
	 * @type {BlendAnimationType}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	blendAnimation:BlendAnimationType;

	/**
	 * If <b>true</b>, the exported file should be exported compressed. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	compressed:Boolean;

	/**
	 * If <b>true</b>, all text should be converted to outlines. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	convertTextToOutlines:Boolean;

	/**
	 * The amount of curve information that should be presented. Default: <b>7</b>
	 * @type {Number} long
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	curveQuality:Number;

	/**
	 * The style in which the exported data should be created in Flash. Default: {@link FlashExportStyle.ASFLASHFILE}
	 * @type {FlashExportStyle}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	exportStyle:FlashExportStyle;

	/**
	 * How transparency should be flattened to preserve appearance or editability on export. Default: {@link OutputFlattening.PRESERVEAPPEARANCE}
	 * @type {OutputFlattening}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	flattenOutput:OutputFlattening;

	/**
	 * The display rate in frames per second. Range: 0.01– 12.0 Default: <b>12.0</b>
	 * @type {Number}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	frameRate:Number;

	/**
	 * If <b>true</b>, the image should be exported as an HTML file. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	generateHTML:Boolean;

	/**
	 * How should the image in the exported Flash file be compressed. Default: {@link FlashImageFormat.LOSSLESS}
	 * @type {FlashImageFormat}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	imageFormat:FlashImageFormat;

	/**
	 * Specifies the JPEG method to use. Default: {@link FlashJPEGMethod.Standard}
	 * @type {FlashJPEGMethod}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	jpegMethod:FlashJPEGMethod;

	/**
	 * Level of compression to use. Range 1 to 10. Default: <b>3</b>
	 * @type {Number} long
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	jpegQuality:Number;

	/**
	 * The order in which layers are exported to Flash frames. Default: {@link LayerOrderType.BOTTOMUP}
	 * @type {LayerOrderType}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	layerOrder:LayerOrderType;

	/**
	 * If <b>true</b>, the Flash file is set to loop when run. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	looping:Boolean;

	/**
	 * If <b>true</b>, export as read-only file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	readOnly:Boolean;

	/**
	 * If a file with the same name already exists, should it be replaced. Default: {@link SaveOptions.PROMPTTOSAVECHANGES}
	 * @type {SaveOptions}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	replacing:SaveOptions;

	/**
	 * The resolution in pixels per inch. Range: 72–2400 Default: <b>72</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	resolution:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {String}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}