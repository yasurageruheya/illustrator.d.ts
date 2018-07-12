/**
 * A label associated with a specific piece of artwork. Tags allows you to assign an unlimited number of key-value pairs to any page item in a document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 * ･ {@link value}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 *
 * @example
 * ➤ Using tags
 *     // Finds the tags associated with the selected art item,
 *     // show names and values in a separate document
 *
 *     if (app.documents.length > 0) {
 *         doc = app.activeDocument;
 *         if (doc.selection.length > 0) {
 *             for (i = 0; i < selection.length; i++) {
 *                 selectedArt = selection[0];
 *                 tagList = selectedArt.tags;
 *                 if (tagList.length == 0) {
 *                     var tempTag = tagList.add();
 *                     tempTag.name = "OneWord";
 *                     tempTag.value = "anything you want";
 *                 }
 *                 // Create a document and add a line of text per tag
 *                 reportDocument = app.documents.add();
 *                 top_offset = 400;
 *                 for (i = 0; i < tagList.length; i++) {
 *                     tagText = tagList[i].value;
 *                     newItem = reportDocument.textFrames.add();
 *                     newItem.contents = "Tag: (" + tagList[i].name + " , " + tagText + ")";
 *                     newItem.position = Array(100, top_offset);
 *                     newItem.textRange.size = 24;
 *                     top_offset = top_offset - 20;
 *                 }
 *             }
 *         }
 *     }
 */
declare class Tag
{
	/**
	 * The tag’s name.
	 * @type {String}
	 * @see {@link Tag}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The object that contains this tag.
	 * @const
	 * @type {Object}
	 * @see {@link Tag}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Tag}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The data stored in this tag.
	 * @type {String}
	 * @see {@link Tag}
	 * @since CS2
	 * @version CS2
	 */
	value:String;

	/**
	 * Deletes this object.
	 * @see {@link Tag}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}