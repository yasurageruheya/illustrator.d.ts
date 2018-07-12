/**
 * The collection of grouped art items in a document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link add}
 * ･ {@link createFromFile}
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Importing a PDF as a group item
 *    The following script shows how you can import an PDF document using the createFromFile function.
 *    Before running this script you must create a one page PDF file and put it in the location
 *
 *    /temp/testfile1.pdf.
 *
 *      // Simulate embedding a placed document.
 *
 *      var embedDoc = new File("/C/temp/testfile1.pdf"); //any pdf file
 *      if (app.documents.length > 0 && embedDoc.exists) {
 *          var doc = app.activeDocument;
 *          var placed = doc.groupItems.createFromFile(embedDoc);
 *      }
 */
declare class GroupItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object.
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	add():GroupItem;

	/**
	 * Places an external vector art file as a group item in the document.
	 * @param {File} imageFile {@link File} object
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	createFromFile(imageFile:File):GroupItem;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):GroupItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):GroupItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link GroupItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}