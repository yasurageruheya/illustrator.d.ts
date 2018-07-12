/**
 * A collection of page item objects. Provides complete access to all the art items in an Illustrator document in the following classes:
 * {@link CompoundPathItem}
 * {@link GraphItem}
 * {@link GroupItem}
 * {@link LegacyTextItem}
 * {@link MeshItem}
 * {@link PathItem}
 * {@link PlacedItem}
 * {@link PluginItem}
 * {@link RasterItem}
 * {@link SymbolItem}
 * {@link TextFrame}
 * You can reference page items through the {@link PageItems} property in a {@link Document}, {@link Layer}, or {@link GroupItem}. When you access an individual item in one of these collections, the reference is a page item of one of a particular type. For example, if you use {@link PageItems} to reference a graph item, the <b>typename</b> value of that object is {@link GraphItem}.
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
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Getting references to external files in page items
 *     Before running this script, open a document that contains one or more linked images.
 *       // Gets all file-references in the current document using the pageItems object,
 *       // then displays them in a new document
 *
 *       if (app.documents.length > 0) {
 *           var fileReferences = new Array();
 *
 *           var sourceDoc = app.activeDocument;
 *           var sourceName = sourceDoc.name;
 *           for (i = 0; i < sourceDoc.pageItems.length; i++) {
 *               artItem = sourceDoc.pageItems[i];
 *               switch (artItem.typename) {
 *                   case "PlacedItem":
 *                       fileReferences.push(artItem.file.fsName);
 *                       break;
 *                   case "RasterItem":
 *                       if (!artItem.embedded) {
 *                           fileReferences.push(artItem.file.fsName);
 *                       }
 *                       break;
 *               }
 *           }
 *           // Write the file references to a new document
 *           var reportDoc = documents.add();
 *           var areaTextPath = reportDoc.pathItems.rectangle(reportDoc.height, 0, reportDoc.width, reportDoc.height);
 *           var fileNameText = reportDoc.textFrames.areaText(areaTextPath);
 *           fileNameText.textRange.size = 24;
 *           var paragraphCount = 3;
 *           var text = "File references in \’" + sourceName + "\’:\r\r";
 *           for (i = 0; i < fileReferences.length; i++) {
 *               text += (fileReferences[i] + "\r");
 *               paragraphCount++;
 *           }
 *           fileNameText.contents = text;
 *       }
 */
declare class PageItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link PageItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link PageItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PageItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {PageItem} {@link PageItem} object
	 * @see {@link PageItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):PageItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {PageItem} {@link PageItem} object
	 * @see {@link PageItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):PageItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link PageItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}