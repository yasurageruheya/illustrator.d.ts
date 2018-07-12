/**
 * Paper information for use in printing documents.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link customPaper}
 * ･ {@link height}
 * ･ {@link imageableArea}
 * ･ {@link typename}
 * ･ {@link width}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Finding paper information
 *     // Display the papers and paper sizes available for 2nd printer
 *
 *     var docRef = documents.add();
 *     var itemRef = docRef.pathItems.rectangle(600, 300, 200, 100);
 *     var textRef = docRef.textFrames.add();
 *     textRef.top = 600;
 *     textRef.left = 50;
 *     // get paper objects for 2nd printer
 *     var printerRef = printerList[1];
 *     textRef.contents = printerRef.name;
 *     textRef.contents += " paper list:\r";
 *     // get details of each paper
 *     var iCount = printerRef.printerInfo.paperSizes.length;
 *     for (var i = 0; i < iCount; i++) {
 *         var paperRef = printerRef.printerInfo.paperSizes[i];
 *         var paperInfoRef = paperRef.paperInfo;
 *         textRef.contents += paperRef.name;
 *         textRef.contents += "\t";
 *         textRef.contents += paperInfoRef.height;
 *         textRef.contents += " x ";
 *         textRef.contents += paperInfoRef.width;
 *         textRef.contents += "\r";
 *     }
 *     redraw();
 */
declare class PaperInfo
{
	/**
	 * If <b>true</b>, it is a custom paper.
	 * @type {Boolean}
	 * @see {@link PaperInfo}
	 * @since CS2
	 * @version CS2
	 */
	customPaper:Boolean;

	/**
	 * The paper’s height in points.
	 * @type {Number} double
	 * @see {@link PaperInfo}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * The imageable area.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PaperInfo}
	 * @since CS2
	 * @version CS2
	 */
	imageableArea:Number[];

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PaperInfo}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The paper’s width in points.
	 * @type {Number} double
	 * @see {@link PaperInfo}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;
}