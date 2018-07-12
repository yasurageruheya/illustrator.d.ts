/**
 * Information about the alignment, position, and other details for a tab stop in a ParagraphAttributes object.
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
 * ➤ Display tab-stop information for a document
 *     // TabStopInfo
 *     // Check current document for textFrames.
 *     // Display information about each TabStop found.
 *
 *     if (app.documents.length < 1) {
 *         alert("open a document with paragraphs that contain TabStops.");
 *     } else {
 *         docRef = app.activeDocument;
 *         if (docRef.textFrames.length < 1) {
 *             alert("open a document with paragraphs that contain TabStops.");
 *         } else {
 *             var tabRef, sData = "Tab Stops Found \n
 *             TabStop Leader\ tTabStop Position\ n ";
 *             var textRef = docRef.textFrames;
 *
 *             for (var i = 0; i < textRef.length; i++) {
 *                 // Get all paragraphs in the textFrames
 *                 paraRef = textRef[i].paragraphs;
 *                 for (p = 0; p < paraRef.length; p++) {
 *                     // Get para attributes for all textRanges in paragraph
 *                     attrRef = paraRef[p].paragraphAttributes;
 *                     tabRef = attrRef.tabStops;
 *                     if (tabRef) {
 *                         sData += tabRef.Leader + "\t";
 *                         sData += tabRef.Position + "\n";
 *                     }
 *                 }
 *             }
 *         }
 *     }
 *     alert(sData);
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