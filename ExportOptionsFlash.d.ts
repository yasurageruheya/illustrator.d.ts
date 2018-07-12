/**
 * Options for exporting a document as a Macromedia® Flash® (SWF) file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link artClipping}
 * ･ {@link artboardRange}
 * ･ {@link backgroundColor}
 * ･ {@link backgroundLayers}
 * ･ {@link blendAnimation}
 * ･ {@link compressed}
 * ･ {@link convertTextToOutlines}
 * ･ {@link curveQuality}
 * ･ {@link exportAllSymbols}
 * ･ {@link exportStyle}
 * ･ {@link exportVersion}
 * ･ {@link frameRate}
 * ･ {@link ignoreTextKerning}
 * ･ {@link imageFormat}
 * ･ {@link includeMetadata}
 * ･ {@link jpegMethod}
 * ･ {@link jpegQuality}
 * ･ {@link layerOrder}
 * ･ {@link looping}
 * ･ {@link playbackAccess}
 * ･ {@link preserveAppearance}
 * ･ {@link readOnly}
 * ･ {@link replacing}
 * ･ {@link resolution}
 * ･ {@link saveMultipleArtboards}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to Flash format
 *     // Exports current document to destFile as a flash file with specified
 *     // options, destFile contains the full path including the file name
 *
 *     function exportToFlashFile(destFile) {
 *         if (app.documents.length > 0) {
 *             var exportOptions = new ExportOptionsFlash();
 *             var type = ExportType.FLASH;
 *             var fileSpec = new File(destFile);
 *             exportOptions.resolution = 150;
 *             app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *         }
 *     }
 */
declare class ExportOptionsFlash extends ExportOptions
{
	/**
	 * How the art should be clipped during output. Default: {@link ArtClippingOption.OUTPUTARTBOUNDS}
	 * @type {ArtClippingOption}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	artClipping:ArtClippingOption;

	/**
	 * If {@link saveMultipleArtboards} is <b>true</b>, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: <b>empty string</b>
	 * @type {String}
	 * @see {@link ExportOptionsFlash}
	 * @since CS4
	 * @version CS4
	 */
	artboardRange:String;

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
	 * The animation type for blended objects. Default: {@link BlendAnimationType.NOBLENDANIMATION}
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
	 * If <b>true</b>, all text is converted to vector paths; preserves the visual appearance of type in all Flash players. Default: <b>false</b>
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
	 * If <b>true</b>, export all symbols defined in the palette. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	exportAllSymbols:Boolean;

	/**
	 * The style in which the exported data should be created in Flash. Default: {@link FlashExportStyle.ASFLASHFILE}
	 * @type {FlashExportStyle}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	exportStyle:FlashExportStyle;

	/**
	 * The version of the exported SWF file. Default: {@link FlashExportVersion.FlashVersion9}.
	 * @type {FlashExportVersion}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	exportVersion:FlashExportVersion;

	/**
	 * The display rate in frames per second. Range: <b>0.01–120.0</b>. Default: <b>12.0</b>
	 * @type {Number}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	frameRate:Number;

	/**
	 * If <b>true</b>, ignore kerning information in text objects. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	ignoreTextKerning:Boolean;

	/**
	 * How should the image in the exported Flash file be compressed. Default: {@link FlashImageFormat.LOSSLESS}
	 * @type {FlashImageFormat}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	imageFormat:FlashImageFormat;

	/**
	 * If <b>true</b>, include minimal XMP metadata in the SWF file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	includeMetadata:Boolean;

	/**
	 * Specifies the JPEG method to use. Default: {@link FlashJPEGMethod.Standard}
	 * @type {FlashJPEGMethod}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	jpegMethod:FlashJPEGMethod;

	/**
	 * Level of compression to use. Range <b>1 to 10</b>. Default: <b>3</b>
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
	 * The access level for the exported SWF file. Default: {@link FlashPlaybackSecurity.PlaybackLocal}
	 * @type {FlashPlaybackSecurity}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	playbackAccess:FlashPlaybackSecurity;

	/**
	 * If <b>true</b>, preserve appearance. If <b>false</b>, preserve editability. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS3
	 * @version CS3
	 */
	preserveAppearance:Boolean;

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
	 * The resolution in pixels per inch. Range: <b>72–2400</b>. Default: <b>72</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	resolution:Number;

	/**
	 * If <b>true</b>, all artboards or range of artboards are saved. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsFlash}
	 * @since CS4
	 * @version CS4
	 */
	saveMultipleArtboards:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {String}
	 * @see {@link ExportOptionsFlash}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}