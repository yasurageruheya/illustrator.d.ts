/**
 * Configuration information about a printer.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link binaryPrintingSupport}
 * ･ {@link colorSupport}
 * ･ {@link customPaperSupport}
 * ･ {@link customPaperTransverseSupport}
 * ･ {@link deviceResolution}
 * ･ {@link inRIPSeparationSupport}
 * ･ {@link maxDeviceResolution}
 * ･ {@link maxPaperHeight}
 * ･ {@link maxPaperHeightOffset}
 * ･ {@link maxPaperWidth}
 * ･ {@link maxPaperWidthOffset}
 * ･ {@link minPaperHeight}
 * ･ {@link minPaperHeightOffset}
 * ･ {@link minPaperWidth}
 * ･ {@link minPaperWidthOffset}
 * ･ {@link paperSizes}
 * ･ {@link postScriptLevel}
 * ･ {@link printerType}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Finding available printers
 *     // Displays a list of available printers in a new text frame
 *
 *     var docRef = documents.add();
 *     var textRef = docRef.textFrames.add();
 *
 *     var iCount = printerList.length;
 *     textRef.contents += "Printers...\r";
 *     for (var i = 0; i < iCount; i++) {
 *         textRef.contents += printerList[i].name;
 *         textRef.contents += "\r\t";
 *     }
 *     textRef.top = 600;
 *     textRef.left = 200;
 *     redraw();
 */
declare class PrinterInfo
{
	/**
	 * If <b>true</b>, the printer supports binary printing.
	 * @type {Boolean}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	binaryPrintingSupport:Boolean;

	/**
	 * The printer color capability.
	 * @type {PrinterColorMode}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	colorSupport:PrinterColorMode;

	/**
	 * If <b>true</b>, the printer supports custom paper size.
	 * @type {Boolean}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	customPaperSupport:Boolean;

	/**
	 * If <b>true</b>, the printer supports custom paper transverse.
	 * @type {Boolean}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	customPaperTransverseSupport:Boolean;

	/**
	 * The printer default resolution.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	deviceResolution:Number;

	/**
	 * If <b>true</b>, the printer supports InRIP color separation.
	 * @type {Boolean}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	inRIPSeparationSupport:Boolean;

	/**
	 * The printer maximum device resolution.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	maxDeviceResolution:Number;

	/**
	 * Custom paper’s maximum height.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	maxPaperHeight:Number;

	/**
	 * Custom paper’s maximum height offset.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	maxPaperHeightOffset:Number;

	/**
	 * Custom paper’s maximum width.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	maxPaperWidth:Number;

	/**
	 * Custom paper’s maximum width offset.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	maxPaperWidthOffset:Number;

	/**
	 * Custom paper’s minimum height.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	minPaperHeight:Number;

	/**
	 * Custom paper’s minimum height offset.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	minPaperHeightOffset:Number;

	/**
	 * Custom paper’s minimum width.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	minPaperWidth:Number;

	/**
	 * Custom paper’s minimum width offset.
	 * @type {Number} double
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	minPaperWidthOffset:Number;

	/**
	 * The list of supported paper sizes.
	 * @type {Paper[]} array of {@link Paper} objects
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	paperSizes:Paper[];

	/**
	 * The PostScript Language level.
	 * @type {PrinterPostScriptLevelEnum}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	postScriptLevel:PrinterPostScriptLevelEnum;

	/**
	 * The printer type.
	 * @type {PrinterTypeEnum}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	printerType:PrinterTypeEnum;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrinterInfo}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}