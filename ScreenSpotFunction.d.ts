/**
 * Contains information about a color separation screen spot function, including its definition in PostScript language code.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link spotFunction}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Finding screen spot functions
 *     // Display the screen spot functions for the 1st PPD file.
 *
 *     var docRef = documents.add();
 *     var ppdRef = PPDFileList[0];
 *     var sInfo = ppdRef.name;
 *     var ppdInfoRef = ppdRef.pPDInfo;
 *
 *     sInfo += "\r\tScreenSpots:\r";
 *     var iScreenSpots = ppdInfoRef.screenSpotFunctionList.length;
 *     for (var n = 0; n < iScreenSpots; n++) {
 *         var screenSpotRef = ppdInfoRef.screenSpotFunctionList[n];
 *         sInfo += "\t\t";
 *         sInfo += screenSpotRef.name;
 *         sInfo += ", spotFunction: ";
 *         sInfo += screenSpotRef.spotFunction;
 *         sInfo += "\r";
 *     }
 *
 *     var textRef = docRef.textFrames.add();
 *     textRef.textRange.characterAttributes.size = 8;
 *     textRef.contents = sInfo;
 *     textRef.top = (docRef.height - 30);
 *     textRef.left = 30;
 *     redraw();
 */
declare class ScreenSpotFunction
{
	/**
	 * The color separation screen spot function name.
	 * @type {String}
	 * @see {@link ScreenSpotFunction}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The spot function expressed in PostScript commands.
	 * @type {String}
	 * @see {@link ScreenSpotFunction}
	 * @since CS2
	 * @version CS2
	 */
	spotFunction:String;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link ScreenSpotFunction}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}