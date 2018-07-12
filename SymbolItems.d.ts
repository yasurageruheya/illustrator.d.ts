/**
 * A collection of {@link SymbolItem} objects in the document.
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
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Creating symbol items
 *     // Creates a new document then adds each of
 *     // the documents symbols to the document
 *
 *     var docRef = documents.add();
 *     var y = 750;
 *     var x = 25;
 *     var iCount = docRef.symbols.length;
 *     for (var i = 0; i < iCount; i++) {
 *         symbolRef = docRef.symbols[i];
 *         symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 *         symbolItemRef1.top = y;
 *         symbolItemRef1.left = x;
 *         y -= (symbolItemRef1.height + 20);
 *         if ((y) <= 60) {
 *             y = 750;
 *             x += 190;
 *         }
 *     }
 */
declare class SymbolItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates an instance of the specified {@link Symbol}.
	 * @param {Symbol} symbol {@link Symbol} object
	 * @return {SymbolItem} {@link SymbolItem} object
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	add(symbol:Symbol):SymbolItem;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {SymbolItem} {@link SymbolItem} object
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):SymbolItem;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {SymbolItem} {@link SymbolItem} object
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):SymbolItem;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link SymbolItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}