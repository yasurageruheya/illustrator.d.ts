/**
 * The collection of {@link Symbol} objects in the document.
 *
 * @since CS2
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link add}
 * ･ {@link index}
 * ･ {@link getByName}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Creating a symbol
 *     // Creates a path item from each graphic style
 *     // then adds each item as a new symbol
 *
 *     var docRef = documents.add();
 *     var y = 750;
 *     var x = 25;
 *
 *     var iCount = docRef.graphicStyles.length;
 *     for (var i = 0; i < iCount; i++) {
 *         var pathRef = docRef.pathItems.rectangle(y, x, 20, 20);
 *         docRef.graphicStyles[i].applyTo(pathRef);
 *         // are we at bottom?
 *         if ((y -= 60) <= 60) {
 *             y = 750; // go back to the top.
 *             x += 200
 *         }
 *         redraw();
 *         docRef.symbols.add(pathRef);
 *     }
 */
declare class Symbols
{
	/**
	 * Read-only. The number of objects in the collection
	 * @const
	 * @type {Number}
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Returns a {@link Symbol} object created from the source art item, any of the following:
	 * {@link CompoundPathItems}
	 * {@link GroupItems}
	 * {@link MeshItems}
	 * {@link NonNativeItems}
	 * {@link PageItems}
	 * {@link PathItems}
	 * {@link RasterItems}
	 * {@link SymbolItems}
	 * {@link TextFrameItems}
	 * The default registration point is {@link SymbolRegistrationPoint.SYMBOLCENTERPOINT}.
	 * @param {PageItem} sourceArt {@link PageItem} object
	 * @param {SymbolRegistrationPoint} [registrationPoint] {@link SymbolRegistrationPoint}
	 * @return {Symbol} {@link Symbol} object
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS5
	 */
	add(sourceArt:PageItem, registrationPoint?:SymbolRegistrationPoint):Symbol;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {Symbol} {@link Symbol} object
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Symbol;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Symbol} {@link Symbol} object
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Symbol;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link Symbols}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}