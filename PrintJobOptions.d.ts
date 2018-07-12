/**
 * Contains information about how the job is to be printed.
 *
 * @since CS2
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link artboardRange}
 * ･ {@link bitmapResolution}
 * ･ {@link collate}
 * ･ {@link copies}
 * ･ {@link designation}
 * ･ {@link file}
 * ･ {@link name}
 * ･ {@link printAllArtboards}
 * ･ {@link printArea}
 * ･ {@link printAsBitmap}
 * ･ {@link reversePages}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Printing with job options
 *     // Creates a new document with layers containing visible, printable,
 *     // non visible and non printable items then prints with each designation
 *     // to view effects of using different job options
 *
 *     var docRef = documents.add();
 *     var textRef_0 = docRef.layers[0].textFrames.add();
 *     textRef_0.contents = "Visible and Printable";
 *     textRef_0.top = 600;
 *     textRef_0.left = 200;
 *
 *     var layerRef_1 = docRef.layers.add();
 *     var textRef_1 = layerRef_1.textFrames.add();
 *     textRef_1.contents = "Visible and Non-Printable";
 *     textRef_1.top = 500;
 *     textRef_1.left = 250;
 *     layerRef_1.printable = false;
 *
 *     var layerRef_2 = docRef.layers.add();
 *     var textRef_2 = layerRef_2.textFrames.add();
 *     textRef_2.contents = "Non-Visible";
 *     textRef_2.top = 400;
 *     textRef_2.left = 300;
 *     layerRef_2.visible = false;
 *     redraw();
 *
 *     // Print with various job options
 *     var printJobOptions = new PrintJobOptions();
 *     var options = new PrintOptions();
 *     options.jobOptions = printJobOptions;
 *
 *     printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
 *     printJobOptions.reverse = true;
 *     docRef.print(options);
 *
 *     printJobOptions.collate = false;
 *     printJobOptions.designation = PrintArtworkDesignation.VISIBLELAYERS;
 *     printJobOptions.reverse = false;
 *     docRef.print(options);
 *
 *     printJobOptions.designation = PrintArtworkDesignation.VISIBLEPRINTABLELAYERS;
 *     var docPath = new File("~/printJobTest1.ps");
 *     printJobOptions.file = docPath;
 *     docRef.print(options);
 */
declare class PrintJobOptions
{
	/**
	 * The artboard range to be printed if {@link printAllArtboards} is <b>false</b>. Default: <b>1-</b>
	 * @type {String}
	 * @see {@link PrintJobOptions}
	 * @since CS4
	 * @version CS4
	 */
	artboardRange:String;

	/**
	 * The bitmap resolution. Minimum: <b>0.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	bitmapResolution:Number;

	/**
	 * If <b>true</b>, collate print pages. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	collate:Boolean;

	/**
	 * The number of copies to print. Minimum: <b>1</b>. Default: <b>1</b>
	 * @type {Number} long
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	copies:Number;

	/**
	 * The layers/objects to be printed. Default: {@link PrintArtworkDesignation.VISIBLEPRINTABLELAYERS}
	 * @type {PrintArtworkDesignation}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	designation:PrintArtworkDesignation;

	/**
	 * The file to which to print.
	 * @type {File} {@link File} object
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	file:File;

	/**
	 * The print job name.
	 * @type {String}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Indicates whether to print all artboards. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PrintJobOptions}
	 * @since CS4
	 * @version CS4
	 */
	printAllArtboards:Boolean;

	/**
	 * The printing bounds. Default: {@link PrintingBounds.ARTBOARDBOUNDS}
	 * @type {PrintingBounds}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	printArea:PrintingBounds;

	/**
	 * If <b>true</b>, print as bitmap. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	printAsBitmap:Boolean;

	/**
	 * If <b>true</b>, print pages in reverse order. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	reversePages:Boolean;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PrintJobOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}