/**
 * A layer in an Illustrator document. Layers may contain nested layers, which are called sublayers in the user interface.
 * The {@link Layer} object contains all of the page items in the specific layer as elements. Your script can access page items as elements of either the {@link Layer} object or as elements of the {@link Document} object. When accessing page items as elements of a layer, only objects in that layer can be accessed. To access page items throughout the entire document, be sure to refer to them as contained by the document.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link artworkKnockout}
 * ･ {@link blendingMode}
 * ･ {@link color}
 * ･ {@link compoundPathItems}
 * ･ {@link dimPlacedImages}
 * ･ {@link graphItems}
 * ･ {@link groupItems}
 * ･ {@link hasSelectedArtwork}
 * ･ {@link isIsolated}
 * ･ {@link layers}
 * ･ {@link legacyTextItems}
 * ･ {@link locked}
 * ･ {@link meshItems}
 * ･ {@link name}
 * ･ {@link opacity}
 * ･ {@link pageItems}
 * ･ {@link parent}
 * ･ {@link pathItems}
 * ･ {@link placedItems}
 * ･ {@link pluginItems}
 * ･ {@link preview}
 * ･ {@link printable}
 * ･ {@link rasterItems}
 * ･ {@link sliced}
 * ･ {@link symbolItems}
 * ･ {@link textFrames}
 * ･ {@link typename}
 * ･ {@link visible}
 * ･ {@link zOrderPosition}
 *
 * <b>Methods</b>
 * ･ {@link move}
 * ･ {@link remove}
 * ･ {@link zOrder}
 *
 * @example
 * ➤ Bringing a layer to the front
 *    This example illustrates how to move the bottom layer to the front.
 *      // Move the bottom layer to the top
 *
 *      if (documents.length > 0) {
 *          countOfLayers = activeDocument.layers.length;
 *          if (countOfLayers > 1) {
 *              // Move the bottom layer to the front
 *              bottomLayer = activeDocument.layers[countOfLayers - 1];
 *              bottomLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
 *          } else {
 *              alert("The active document only has only 1 layer")
 *          }
 *      }
 */
declare class Layer
{
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout. You cannot set this value to {@link KnockoutState.Unknown}.
	 * @type {KnockoutState}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * The layer’s selection mark color.
	 * @type {RGBColor} {@link RGBColor} object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	color:RGBColor;

	/**
	 * Read-only. The compound path items contained in this layer.
	 * @const
	 * @type {CompoundPathItems|CompoundPathItem[]} {@link CompoundPathItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly compoundPathItems:CompoundPathItems|CompoundPathItem[];

	/**
	 * If <b>true</b>, placed images should be rendered as dimmed in this layer.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	dimPlacedImages:Boolean;

	/**
	 * Read-only. The graph items contained in this layer.
	 * @const
	 * @type {GraphItems|GraphItem[]} {@link GraphItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly graphItems:GraphItems|GraphItem[];

	/**
	 * Read-only. The group items contained in this layer.
	 * @const
	 * @type {GroupItems|GroupItem[]} {@link GroupItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly groupItems:GroupItems|GroupItem[];

	/**
	 * If <b>true</b>, an object in this layer has been selected; set to <b>false</b> to deselect all objects in the layer.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	hasSelectedArtwork:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layers contained in this layer.
	 * @const
	 * @type {Layers|Layer[]} {@link Layers} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly layers:Layers|Layer[];

	/**
	 * Read-only. The legacy text items in this layer.
	 * @const
	 * @type {LegacyTextItems|LegacyTextItem[]} {@link LegacyTextItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly legacyTextItems:LegacyTextItems|LegacyTextItem[];

	/**
	 * If <b>true</b>, this layer is editable; set to <b>false</b> to lock the layer.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * Read-only. The mesh items contained in this layer.
	 * @const
	 * @type {MeshItems|MeshItem[]} {@link MeshItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly meshItems:MeshItems|MeshItem[];

	/**
	 * The name of this layer.
	 * @type {String}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The opacity of the layer. Range: 0.0 to 100.0
	 * @type {Number} double
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The page items (all art item classes) contained in this layer.
	 * @const
	 * @type {PageItems|PageItem[]} {@link PageItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly pageItems:PageItems|PageItem[];

	/**
	 * Read-only. The document or layer that contains this layer.
	 * @const
	 * @type {Document|Layer} {@link Document} object or {@link Layer} object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document|Layer;

	/**
	 * Read-only. The path items contained in this layer.
	 * @const
	 * @type {PathItems|PathItem[]} {@link PathItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathItems:PathItems|PathItem[];

	/**
	 * Read-only. The placed items contained in this layer.
	 * @const
	 * @type {PlacedItems|PlacedItem[]} {@link PlacedItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly placedItems:PlacedItems|PlacedItem[];

	/**
	 * Read-only. The plug-in items contained in this layer.
	 * @const
	 * @type {PluginItems|PluginItem[]} {@link PluginItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly pluginItems:PluginItems|PluginItem[];

	/**
	 * If <b>true</b>, this layer should be displayed using preview mode.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	preview:Boolean;

	/**
	 * If <b>true</b>, this layer should be printed when printing the document.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	printable:Boolean;

	/**
	 * Read-only. The raster items contained in this layer.
	 * @const
	 * @type {RasterItems|RasterItem[]} {@link RasterItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly rasterItems:RasterItems|RasterItem[];

	/**
	 * If <b>true</b>, the layer item is sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * Read-only. The symbol items contained in the layer.
	 * @const
	 * @type {SymbolItems|SymbolItem[]} {@link SymbolItems} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly symbolItems:SymbolItems|SymbolItem[];

	/**
	 * Read-only. The text art items contained in this layer.
	 * @const
	 * @type {TextFrames|TextFrame[]} {@link TextFrames} collection object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly textFrames:TextFrames|TextFrame[];

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * If <b>true</b>, this layer is visible.
	 * @type {Boolean}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	visible:Boolean;

	/**
	 * Read-only. The position of this layer within the stacking order of layers in the document.
	 * @const
	 * @type {Number} long
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {Layer} {@link Layer} object
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):Layer;

	/**
	 * Deletes this object.
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Arranges the layer’s position in the stacking order of the containing layer or document ({@link Layer#parent}) of this object
	 * @param {ZOrderMethod} ZOrderCmd {@link ZOrderMethod}
	 * @see {@link Layer}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(ZOrderCmd:ZOrderMethod):void;
}