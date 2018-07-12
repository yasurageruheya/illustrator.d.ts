/**
 * Information about the alignment, position, and other details for a tab stop in a {@link ParagraphAttributes} object.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link alignment}
 * ･ {@link decimalCharacter}
 * ･ {@link leader}
 * ･ {@link position}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Displaying tab stop information
 *     // Displays tab stop information found in each text frame
 *     // of current document, if any.
 *
 *     docRef = app.activeDocument;
 *     var tabRef;
 *     var sData = "Tab Stops Found \rTabStop Leader\t\tTabStop Position\r";
 *     var textRef = docRef.textFrames;
 *
 *     for (var i = 0; i < textRef.length; i++) {
 *         // Get all paragraphs in the textFrames
 *         paraRef = textRef[i].paragraphs;
 *         for (p = 0; p < paraRef.length; p++) {
 *             // Get para attributes for all textRanges in paragraph
 *             attrRef = paraRef[p].paragraphAttributes;
 *             tabRef = attrRef.tabStops;
 *             if (tabRef.length > 0) {
 *                 for (var t = 0; t < tabRef.length; t++) {
 *                     sData += "\t" + tabRef[t].leader + "\t\t";
 *                     sData += "\t\t" + tabRef[t].position + "\r";
 *                 } // end for
 *             } // end if
 *         } // end for
 *     } // end for
 *     var newTF = docRef.textFrames.add();
 *     newTF.contents = sData;
 *     newTF.top = 400;
 *     newTF.left = 100;
 *     redraw();
 */
declare class TabStopInfo
{
	/**
	 * The alignment of the tab stop. Default: {@link TabStopAlignment.Left}
	 * @type {TabStopAlignment}
	 * @see {@link TabStopInfo}
	 * @since CS2
	 * @version CS2
	 */
	alignment:TabStopAlignment;

	/**
	 * The character used for decimal tab stops. Default: .
	 * @type {String}
	 * @see {@link TabStopInfo}
	 * @since CS2
	 * @version CS2
	 */
	decimalCharacter:String;

	/**
	 * The leader dot character.
	 * @type {String}
	 * @see {@link TabStopInfo}
	 * @since CS2
	 * @version CS2
	 */
	leader:String;

	/**
	 * The position of the tab stop expressed in points. Default: 0.0
	 * @type {Number} double
	 * @see {@link TabStopInfo}
	 * @since CS2
	 * @version CS2
	 */
	position:Number;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TabStopInfo}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}