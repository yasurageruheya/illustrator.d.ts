/**
 * Information about a PostScript Printer Description (PPD) file.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link languageLevel}
 * ･ {@link PPDFilePath}
 * ･ {@link screenList}
 * ･ {@link screenSpotFunctionList}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Displaying PPD file properties
 *     // Displays postscript level and path for each PPD file found in a new text frame
 *
 *     var sPPD = "";
 *     var docRef = documents.add();
 *     var x = 30;
 *     var y = (docRef.height - 30);
 *
 *     var iLength = PPDFileList.length;
 *     if (iLength > 20) iLength = 20;
 *
 *     for (var i = 0; i < iLength; i++) {
 *         var ppdRef = PPDFileList[i];
 *         sPPD = ppdRef.name;
 *         sPPD += "\r\tPS Level ";
 *         var ppdInfoRef = ppdRef.PPDInfo;
 *         sPPD += ppdInfoRef.languageLevel;
 *         sPPD += "\r\tPath: ";
 *         sPPD += ppdInfoRef.PPDFilePath;
 *
 *         var textRef = docRef.textFrames.add();
 *         textRef.textRange.characterAttributes.size = 8;
 *         textRef.contents = sPPD;
 *         textRef.top = (y);
 *         textRef.left = x;
 *         redraw();
 *
 *         if ((y -= (textRef.height)) <= 30) {
 *             y = (docRef.height - 30);
 *             x += 150;
 *         }
 *     }
 *
 * @example
 * ➤ PPDFileInfo and related screen information
 *     // Displays in a new text frame, the postscript level, file paths, screens, and
 *     // screen spot information for first 10 PPD files found
 *
 *     var sPPD = "";
 *     var docRef = documents.add();
 *     var x = 30;
 *     var y = (docRef.height - 30);
 *
 *     var iLength = PPDFileList.length;
 *     if (iLength > 10) iLength = 10;
 *     for (var i = 0; i < iLength; i++) {
 *         var ppdRef = PPDFileList[i];
 *         sPPD = ppdRef.name;
 *         sPPD += "\r\tPS Level ";
 *         var ppdInfoRef = ppdRef.PPDInfo;
 *         sPPD += ppdInfoRef.languageLevel;
 *         sPPD += "\r\tPath: ";
 *         sPPD += ppdInfoRef.PPDFilePath;
 *
 *         sPPD += "\r\tScreens:\r";
 *         var iScreens = ppdInfoRef.screenList.length;
 *         for (var c = 0; c < iScreens; c++) {
 *             var screenRef = ppdInfoRef.screenList[c];
 *             sPPD += "\t\t";
 *             sPPD += screenRef.name;
 *             var screenInfoRef = screenRef.screenInfo;
 *             sPPD += ", Angle = ";
 *             sPPD += screenInfoRef.angle;
 *             sPPD += ", Frequency = ";
 *             sPPD += screenInfoRef.frequency;
 *             sPPD += "\r";
 *         }
 *
 *         sPPD += "\r\tScreenSpots:\r";
 *         var iScreenSpots = ppdInfoRef.screenSpotFunctionList.length;
 *         for (var n = 0; n < iScreenSpots; n++) {
 *             var screenSpotRef = ppdInfoRef.screenSpotFunctionList[n];
 *             sPPD += "\t\t";
 *             sPPD += screenSpotRef.name;
 *             sPPD += ", spotFunction: ";
 *             sPPD += screenSpotRef.spotFunction;
 *             sPPD += "\r";
 *         }
 *
 *         var textRef = docRef.textFrames.add();
 *         textRef.textRange.characterAttributes.size = 8;
 *         textRef.contents = sPPD;
 *         textRef.top = (y);
 *         textRef.left = x;
 *         redraw();
 *
 *         y -= (textRef.height);
 *     }
 */
declare class PPDFileInfo
{
	/**
	 * The PostScript language level.
	 * @type {String}
	 * @see {@link PPDFileInfo}
	 * @since CS2
	 * @version CS2
	 */
	languageLevel:String;

	/**
	 * Path specification for the PPD file.
	 * @type {File} {@link File} object
	 * @see {@link PPDFileInfo}
	 * @since CS2
	 * @version CS3
	 */
	PPDFilePath:File;

	/**
	 * List of color separation screens.
	 * @type {Screen[]} array of {@link Screen} objects
	 * @see {@link PPDFileInfo}
	 * @since CS2
	 * @version CS2
	 */
	screenList:Screen[];

	/**
	 * List of color separation screen spot functions.
	 * @type {ScreenSpotFunction[]} array of {@link ScreenSpotFunction} objects
	 * @see {@link PPDFileInfo}
	 * @since CS2
	 * @version CS2
	 */
	screenSpotFunctionList:ScreenSpotFunction[];

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PPDFileInfo}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}