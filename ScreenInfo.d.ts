/**
 * Contains information about the angle and frequency of the color separation screen to be used for printing.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link angle}
 * ･ {@link defaultScreen}
 * ･ {@link frequency}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Getting screen information
 *     // Displays in a new text frame, the name, angle and frequency
 *     // of each screen list item
 *
 *     var sInfo = "";
 *     var docRef = documents.add();
 *     if (PPDFileList.length == 0) {
 *         var sInfo = "\r\t\tEmpty PPDFileList"
 *     } else {
 *         var ppdRef = PPDFileList[0];
 *         var ppdInfoRef = ppdRef.PPDInfo;
 *         sInfo += "\r\t\tScreen Objects for 1st PPD File:\r";
 *         sInfo += "\t\t" + ppdRef.name;
 *         var iScreens = ppdInfoRef.screenList.length;
 *         if (iScreens > 0) {
 *             for (var c = 0; c < iScreens; c++) {
 *                 var screenRef = ppdInfoRef.screenList[c];
 *                 sInfo += "\r\t\t";
 *                 sInfo += screenRef.name;
 *
 *                 var screenInfoRef = screenRef.screenInfo;
 *                 sInfo += ", Angle = ";
 *                 sInfo += screenInfoRef.angle;
 *                 sInfo += ", Frequency = ";
 *                 sInfo += screenInfoRef.frequency;
 *                 sInfo += "\r";
 *             }
 *         } else {
 *             sInfo += "\r\t\tEmpty ScreenList";
 *         }
 *     }
 *     var textRef = docRef.textFrames.add();
 *     textRef.textRange.characterAttributes.size = 12;
 *     textRef.contents = sInfo;
 *     textRef.top = 600;
 *     textRef.left = 30;
 *     redraw();
 */
declare class ScreenInfo
{
	/**
	 * The screen’s angle in degrees.
	 * @type {Number} double
	 * @see {@link ScreenInfo}
	 * @since CS2
	 * @version CS2
	 */
	angle:Number;

	/**
	 * If <b>true</b>, it is the default screen.
	 * @type {Boolean}
	 * @see {@link ScreenInfo}
	 * @since CS2
	 * @version CS2
	 */
	defaultScreen:Boolean;

	/**
	 * The screen’s frequency.
	 * @type {Number} double
	 * @see {@link ScreenInfo}
	 * @since CS2
	 * @version CS2
	 */
	frequency:Number;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link ScreenInfo}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}