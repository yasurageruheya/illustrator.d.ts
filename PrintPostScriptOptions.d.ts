/**
 * Options for printing to a PostScript printer.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link binaryPrinting}
 * ･ {@link compatibleShading}
 * ･ {@link forceContinuousTone}
 * ･ {@link imageCompression}
 * ･ {@link negativePrinting}
 * ･ {@link postScriptLevel}
 * ･ {@link shadingResolution}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting PostScript printing options
 *     // Print current document at various PS levels
 *
 *     if (documents.length < 1) {
 *         alert("Open a document with text.");
 *     }
 *     // Create new postscript options object, assign to print options
 *     var psOpts = new PrintPostScriptOptions();
 *     var printOpts = new PrintOptions();
 *     printOpts.postScriptOptions = psOpts;
 *     // Assign PS level, print
 *     psOpts.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL2;
 *     activeDocument.print(printOpts);
 *
 *     psOpts.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL3;
 *     activeDocument.print(printOpts);
 */
declare class PrintPostScriptOptions
{
	/**
	 * If <b>true</b>, printing should be in binary mode. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	binaryPrinting:Boolean;

	/**
	 * If <b>true</b>, use PostScript Level 1-compatible gradient and gradient mesh printing. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	compatibleShading:Boolean;

	/**
	 * If <b>true</b>, force continuous tone. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	forceContinuousTone:Boolean;

	/**
	 * The image compression type. Default: {@link PostScriptImageCompressionType.IMAGECOMPRESSIONNONE}
	 * @type {PostScriptImageCompressionType}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	imageCompression:PostScriptImageCompressionType;

	/**
	 * If <b>true</b>, print in negative mode. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	negativePrinting:Boolean;

	/**
	 * The PostScript language level. Default: {@link PrinterPostScriptLevelEnum.LEVEL2}
	 * @type {PrinterPostScriptLevelEnum}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	postScriptLevel:PrinterPostScriptLevelEnum;

	/**
	 * The shading resolution. Range: 1.0 to 9600.0 Default: 300.0
	 * @type {Number} double
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	shadingResolution:Number;

	/**
	 * Read-only. The class name of the object.
	 * @type {String}
	 * @see {@link PrintPostScriptOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}