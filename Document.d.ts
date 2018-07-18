/**
 * An Illustrator document. {@link Documents} are contained in the {@link Application} object.
 * The default document settings—those properties starting with the word “default”—are global settings that affect the current document. Be sure to modify these default properties only when a document is open. Note that if you set default properties to desired values before creating new objects, you can streamline your scripts, eliminating the need to specify specific properties such as {@link fillColor} and {@link stroked} that have default properties.
 * A document’s color space, height, and width can only be set when the document is created. You cannot modify these properties in an existing document. See {@link Application#open} for more information on how document color spaces are handled.
 *
 * @since CS2
 * @version CC2017
 *
 * <b>Properties</b>
 * ･ {@link activeDataset}
 * ･ {@link activeLayer}
 * ･ {@link activeView}
 * ･ {@link artboards}
 * ･ {@link brushes}
 * ･ {@link characterStyles}
 * ･ {@link compoundPathItems}
 * ･ {@link cropBox}
 * ･ {@link cropStyle}
 * ･ {@link dataSets}
 * ･ {@link defaultFillColor}
 * ･ {@link defaultFilled}
 * ･ {@link defaultFillOverprint}
 * ･ {@link defaultStrokeCap}
 * ･ {@link defaultStrokeColor}
 * ･ {@link defaultStroked}
 * ･ {@link defaultStrokeDashes}
 * ･ {@link defaultStrokeDashOffset}
 * ･ {@link defaultStrokeJoin}
 * ･ {@link defaultStrokeMiterLimit}
 * ･ {@link defaultStrokeOverprint}
 * ･ {@link defaultStrokeWidth}
 * ･ {@link documentColorSpace}
 * ･ {@link fullName}
 * ･ {@link geometricBounds}
 * ･ {@link gradients}
 * ･ {@link graphicStyles}
 * ･ {@link graphItems}
 * ･ {@link groupItems}
 * ･ {@link height}
 * ･ {@link inkList}
 * ･ {@link kinsokuSet}
 * ･ {@link layers}
 * ･ {@link legacyTextItems}
 * ･ {@link meshItems}
 * ･ {@link mojikumiSet}
 * ･ {@link name}
 * ･ {@link nonNativeItems}
 * ･ {@link outputResolution}
 * ･ {@link pageItems}
 * ･ {@link pageOrigin}
 * ･ {@link paragraphStyles}
 * ･ {@link parent}
 * ･ {@link path}
 * ･ {@link pathItems}
 * ･ {@link patterns}
 * ･ {@link placedItems}
 * ･ {@link pluginItems}
 * ･ {@link printTiles}
 * ･ {@link rasterEffectSettings}
 * ･ {@link rasterItems}
 * ･ {@link rulerOrigin}
 * ･ {@link rulerUnits}
 * ･ {@link saved}
 * ･ {@link selection}
 * ･ {@link showPlacedImages}
 * ･ {@link splitLongPaths}
 * ･ {@link spots}
 * ･ {@link stationery}
 * ･ {@link stories}
 * ･ {@link swatches}
 * ･ {@link swatchGroups}
 * ･ {@link symbolItems}
 * ･ {@link symbols}
 * ･ {@link tags}
 * ･ {@link textFrames}
 * ･ {@link tileFullPages}
 * ･ {@link typename}
 * ･ {@link useDefaultScreen}
 * ･ {@link variables}
 * ･ {@link variablesLocked}
 * ･ {@link views}
 * ･ {@link visibleBounds}
 * ･ {@link width}
 * ･ {@link XMPString}
 *
 * <b>Methods</b>
 * ･ {@link activate}
 * ･ {@link arrange}
 * ･ {@link close}
 * ･ {@link closeNoUI}
 * ･ {@link convertCoordinate}
 * ･ {@link exportFile}
 * ･ {@link exportPDFPreset}
 * ･ {@link exportPerspectiveGridPreset}
 * ･ {@link exportPrintPreset}
 * ･ {@link exportVariables}
 * ･ {@link fitArtboardToSelectedArt}
 * ･ {@link getPerspectiveActivePlane}
 * ･ {@link hidePerspectiveGrid}
 * ･ {@link imageCapture}
 * ･ {@link importCharacterStyles}
 * ･ {@link importParagraphStyles}
 * ･ {@link importPDFPreset}
 * ･ {@link importPerspectiveGridPreset}
 * ･ {@link importPrintPreset}
 * ･ {@link importVariables}
 * ･ {@link print}
 * ･ {@link rasterize}
 * ･ {@link rearrangeArtboards}
 * ･ {@link save}
 * ･ {@link saveAs}
 * ･ {@link saveNoUI}
 * ･ {@link selectObjectsOnActiveArtboard}
 * ･ {@link setActivePlane}
 * ･ {@link selectPerspectivePreset}
 * ･ {@link showPerspectiveGrid}
 * ･ {@link windowCapture}
 *
 * @example
 * ➤ Deselecting all objects in the current document
 *     The frontmost document can be referred to as either activeDocument or documents[0].
 *       var docRef = activeDocument;
 *
 *       docRef.selection = null;
 *
 * @example
 * ➤ Closing a document
 *     // Closes the active document without saving changes
 *
 *     if (app.documents.length > 0) {
 *         aiDocument = app.activeDocument;
 *         aiDocument.close(SaveOptions.DONOTSAVECHANGES);
 *         aiDocument = null;
 *     }
 *
 * @example
 * ➤ Creating a document with defaults
 *     // Creates a new document if none exists
 *     // then sets fill and stroke defaults to true
 *
 *     if (app.documents.length == 0) {
 *         doc = app.documents.add();
 *     } else {
 *         doc = app.activeDocument;
 *     }
 *     doc.defaultFilled = true;
 *     doc.defaultStroked = true;
 */
declare class Document
{
	/**
	 * The currently opened dataset.
	 * @type {Dataset} {@link Dataset} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	activeDataset:Dataset;

	/**
	 * The active layer in the document.
	 * @type {Layer} {@link Layer} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	activeLayer:Layer;

	/**
	 * Read-only. The document’s current view.
	 * @const
	 * @type {View} {@link View} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly activeView:View;

	/**
	 * Read-only. All artboards in the document.
	 * @const
	 * @type {Artboards|Artboard[]} {@link Artboards} collection object
	 * @see {@link Document}
	 * @since CS4
	 * @version CS4
	 */
	readonly artboards:Artboards|Artboard[];

	/**
	 * Read-only. The brushes contained in the document.
	 * @const
	 * @type {Brushes|Brush[]} {@link Brushes} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly brushes:Brushes|Brush[];

	/**
	 * Read-only. The list of character styles in this document.
	 * @const
	 * @type {CharacterStyles|CharacterStyle[]} {@link CharacterStyles} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly characterStyles:CharacterStyles|CharacterStyle[];

	/**
	 * Read-only. The compound path items contained in the document.
	 * @const
	 * @type {CompoundPathItems|CompoundPathItem[]} {@link CompoundPathItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly compoundPathItems:CompoundPathItems|CompoundPathItem[];

	/**
	 * The boundary of the document’s cropping box for output, or <b>null</b> if no value has been set.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	cropBox:Number[];

	/**
	 * The style of the document’s cropping box.
	 * @type {CropOptions}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	cropStyle:CropOptions;

	/**
	 * Read-only. The datasets contained in the document.
	 * @const
	 * @type {Datasets|Dataset[]} {@link Datasets} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly dataSets:Datasets|Dataset[];

	/**
	 * The color to use to fill new paths if {@link defaultFilled} is <b>true</b>.
	 * @type {Color} {@link Color} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultFillColor:Color;

	/**
	 * If <b>true</b>, a new path should be {@link filled}.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultFilled:Boolean;

	/**
	 * If <b>true</b>, the art beneath a {@link filled} object should be overprinted by default.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultFillOverprint:Boolean;

	/**
	 * Default type of line capping for paths created.
	 * @type {StrokeCap}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeCap:StrokeCap;

	/**
	 * The stroke color for new paths if {@link defaultStroked} is <b>true</b>.
	 * @type {Color} {@link Color} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeColor:Color;

	/**
	 * If <b>true</b>, a new path should be {@link stroked}.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStroked:Boolean;

	/**
	 * Default lengths for dashes and gaps in dashed lines, starting with the first dash <b>length</b>, followed by the first gap <b>length</b>, and so on. Set to an empty object, {}, for solid line.
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeDashes:Object;

	/**
	 * The default distance into the dash pattern at which the pattern should be started for new paths.
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeDashOffset:Number;

	/**
	 * Default type of joints in new paths.
	 * @type {StrokeJoin}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeJoin:StrokeJoin;

	/**
	 * When a default stroke join is set to {@link StrokeJoin.MITERENDJOIN}, this property specifies when the join will be converted to beveled (squared-off) by default.
	 * The default miter limit of 4 means that when the <b>length</b> of the point reaches four times the stroke weight, the join switches from a miter join to a bevel join. Range: <b>1 to 500</b>; a value of 1 specifies a bevel join.
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeMiterLimit:Number;

	/**
	 * If <b>true</b>, the art beneath a {@link stroked} object should be overprinted by default.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeOverprint:Boolean;

	/**
	 * Default width of stroke for new paths.
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	defaultStrokeWidth:Number;

	/**
	 * Read-only. The color specification system to use for this document’s color space.
	 * @const
	 * @type {DocumentColorSpace}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly documentColorSpace:DocumentColorSpace;

	/**
	 * Read-only. The file associated with the document, which includes the complete path to the file.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly fullName:File;

	/**
	 * Read-only. The bounds of the illustration excluding the stroke width of any objects in the document.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * Read-only. The gradients contained in the document.
	 * @const
	 * @type {Gradients|Gradient[]} {@link Gradients} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly gradients:Gradients|Gradient[];

	/**
	 * Read-only. The graphic styles defined in this document.
	 * @const
	 * @type {GraphicStyles|GraphicStyle[]} {@link GraphicStyles} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly graphicStyles:GraphicStyles|GraphicStyle[];

	/**
	 * Read-only. The graph art items in this document.
	 * @const
	 * @type {GraphItems|GraphItem[]} {@link GraphItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly graphItems:GraphItems|GraphItem[];

	/**
	 * Read-only. The group items contained in the document.
	 * @const
	 * @type {GroupItems|GroupItem[]} {@link GroupItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly groupItems:GroupItems|GroupItem[];

	/**
	 * Read-only. The height of the document.
	 * @const
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly height:Number;

	/**
	 * Read-only. The list of inks in this document.
	 * @const
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly inkList:Object;

	/**
	 * Read-only. The Kinsoku set of characters that cannot begin or end a line of Japanese text.
	 * @const
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly kinsokuSet:Object;

	/**
	 * Read-only. The layers contained in the document.
	 * @const
	 * @type {Layers|Layer[]} {@link Layers} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly layers:Layers|Layer[];

	/**
	 * Read-only. The legacy text items in the document.
	 * @const
	 * @type {LegacyTextItems|LegacyTextItem[]} {@link LegacyTextItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly legacyTextItems:LegacyTextItems|LegacyTextItem[];

	/**
	 * Read-only. The mesh art items contained in the document.
	 * @const
	 * @type {MeshItems|MeshItem[]} {@link MeshItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly meshItems:MeshItems|MeshItem[];

	/**
	 * Read-only. A list of names of predefined Mojikumi sets which specify the spacing for the layout and composition of Japanese text.
	 * @const
	 * @type {Object}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly mojikumiSet:Object;

	/**
	 * Read-only. The document’s name (not the complete file path to the document).
	 * @const
	 * @type {String}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly name:String;

	/**
	 * Read-only. The non-native art items in this document.
	 * @const
	 * @type {NonNativeItems} {@link NonNativeItems} object
	 * @see {@link Document}
	 * @since CS4
	 * @version CS4
	 */
	readonly nonNativeItems:NonNativeItems;

	/**
	 * Read-only. The current output resolution for the document in dots per inch (dpi).
	 * @const
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly outputResolution:Number;

	/**
	 * Read-only. The page items (all art item classes) contained in the document.
	 * @const
	 * @type {PageItems|PageItem[]} {@link PageItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly pageItems:PageItems|PageItem[];

	/**
	 * The zero-point of the page in the document without margins, relative to the overall height and width.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	pageOrigin:Number[];

	/**
	 * Read-only. The list of paragraph styles in this document.
	 * @const
	 * @type {ParagraphStyles|ParagraphStyle[]} {@link ParagraphStyles} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphStyles:ParagraphStyles|ParagraphStyle[];

	/**
	 * Read-only. The application that contains this document.
	 * @const
	 * @type {Application} {@link Application} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Application;

	/**
	 * Read-only. The file associated with the document, which includes the complete path to the file.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly path:File;

	/**
	 * Read-only. The path items contained in this document.
	 * @const
	 * @type {PathItems|PathItem[]} {@link PathItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathItems:PathItems|PathItem[];

	/**
	 * Read-only. The patterns contained in this document.
	 * @const
	 * @type {Patterns|Pattern[]} {@link Patterns} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly patterns:Patterns|Pattern[];

	/**
	 * Read-only. The placed items contained in this document.
	 * @const
	 * @type {PlacedItems|PlacedItem[]} {@link PlacedItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly placedItems:PlacedItems|PlacedItem[];

	/**
	 * Read-only. The plug-in items contained in this document.
	 * @const
	 * @type {PluginItems|PluginItem[]} {@link PluginItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly pluginItems:PluginItems|PluginItem[];

	/**
	 * Read-only. If <b>true</b>, this document should be printed as tiled output.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly printTiles:Boolean;

	/**
	 * The document’s raster effect settings.
	 * @type {RasterEffectOptions} {@link RasterEffectOptions} object
	 * @see {@link Document}
	 * @since C4
	 * @version CS4
	 */
	rasterEffectSettings:RasterEffectOptions;

	/**
	 * Read-only. The raster items contained in this document.
	 * @const
	 * @type {RasterItems|RasterItem[]} {@link RasterItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly rasterItems:RasterItems|RasterItem[];

	/**
	 * The zero-point of the rulers in the document relative to the bottom left of the document.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	rulerOrigin:Number[];

	/**
	 * Read-only. The default measurement units for the rulers in the document.
	 * @const
	 * @type {RulerUnits}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly rulerUnits:RulerUnits;

	/**
	 * If <b>true</b>, the document has not been changed since last time it was saved.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	saved:Boolean;

	/**
	 * References to the objects in this document’s current selection, or <b>null</b> when nothing is selected.
	 * A reference to an insertion point is returned when there is an active insertion point in the contents of a selected text art item. Similarly, a reference to a range of text is returned when characters are selected in the contents of a text art item.
	 * @type {Object[]} array of objects
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	selection:Object[];

	/**
	 * Read-only. If <b>true</b>, placed images should be displayed in the document.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly showPlacedImages:Boolean;

	/**
	 * Read-only. If <b>true</b>, long paths should be split when printing.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly splitLongPaths:Boolean;

	/**
	 * Read-only. The spot colors contained in this document.
	 * @const
	 * @type {Spots|Spot[]} {@link Spots} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly spots:Spots|Spot[];

	/**
	 * Read-only. If <b>true</b>, the file is a stationery file.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly stationery:Boolean;

	/**
	 * Read-only. The story items in this document.
	 * @const
	 * @type {Stories|Story[]} {@link Stories} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly stories:Stories|Story[];

	/**
	 * Read-only. The swatches in this document.
	 * @const
	 * @type {Swatches|Swatch[]} {@link Swatches} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly swatches:Swatches|Swatch[];

	/**
	 * Read-only. The swatch groups in this document.
	 * @const
	 * @type {SwatchGroups|SwatchGroup[]} {@link SwatchGroups} collection object
	 * @see {@link Document}
	 * @since CS4
	 * @version CS4
	 */
	readonly swatchGroups:SwatchGroups|SwatchGroup[];

	/**
	 * Read-only. The art items in the document linked to symbols.
	 * @const
	 * @type {SymbolItems|SymbolItem[]} {@link SymbolItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly symbolItems:SymbolItems|SymbolItem[];

	/**
	 * Read-only. The symbols in this document.
	 * @const
	 * @type {Symbols|Symbol[]} {@link Symbols} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly symbols:Symbols|Symbol[];

	/**
	 * Read-only. The tags in this document.
	 * @const
	 * @type {Tags|Tag[]} {@link Tags} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags|Tag[];

	/**
	 * Read-only. The text frames in this document.
	 * @const
	 * @type {TextFrameItems|TextFrameItem[]} {@link TextFrameItems} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS5
	 */
	readonly textFrames:TextFrameItems|TextFrameItem[];

	/**
	 * Read-only. If <b>true</b>, full pages should be tiled when printing this document.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly tileFullPages:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Read-only. If <b>true</b>, the printer’s default screen should be used when printing this document.
	 * @const
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly useDefaultScreen:Boolean;

	/**
	 * Read-only. The variables defined in this document.
	 * @const
	 * @type {Variables|Variable[]} {@link Variables} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly variables:Variables|Variable[];

	/**
	 * If <b>true</b>, the variables are locked.
	 * @type {Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	variablesLocked:Boolean;

	/**
	 * Read-only. The views contained in this document.
	 * @const
	 * @type {Views|View[]} {@link Views} collection object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly views:Views|View[];

	/**
	 * Read-only. The visible bounds of the document, including stroke width of any objects in the illustration.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * Read-only. The width of this document.
	 * @const
	 * @type {Number} double
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	readonly width:Number;

	/**
	 * The XMP metadata packet associated with this document.
	 * @const
	 * @type {String}
	 * @see {@link Document}
	 * @since CS3
	 * @version CS3
	 */
	XMPString:String;

	/**
	 * Brings the first window associated with the document to the front.
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	activate():void;

	/**
	 * Arranges multiple documents in the given layout style.
	 * @param {DocumentLayoutStyle} [layoutStyle] {@link DocumentLayoutStyle}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CC
	 * @version CC
	 */
	arrange(layoutStyle?:DocumentLayoutStyle):Boolean;

	/**
	 * Closes a document using specified save options.
	 * When you close a document, you should set your document reference to <b>null</b> to prevent your script from accidentally trying to access closed documents.
	 * @param {SaveOptions} [saveOptions] {@link SaveOptions}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	close(saveOptions?:SaveOptions):void;

	/**
	 * Closes the specified non-UI document.
	 * @see {@link Document}
	 * @since CC2017
	 * @version CC2017
	 */
	closeNoUI():void;

	/**
	 * Converts the given point between artboard and document coordinate systems. Returns the converted point coordinates.
	 * @param {Number[]} coordinate Point. array of 2 {@link Number}
	 * @param {CoordinateSystem} source {@link CoordinateSystem}
	 * @param {CoordinateSystem} destination {@link CoordinateSystem}
	 * @return {Number[]} Point array of 2 {@link Number}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	convertCoordinate(coordinate:Number[], source:CoordinateSystem, destination:CoordinateSystem):Number[];

	/**
	 * Exports the document to the specified file using one of the predefined export file formats. The appropriate file extension is automatically appended to the file name, except for Photoshop® documents. For these, you must include the file extension (PSD) in the file specification.
	 * @param {File} exportFile {@link File} object
	 * @param {ExportType} exportFormat {@link ExportType}
	 * @param {Object} [options] {@link Object} variant
	 * @see {@link Document}
	 * @since CS2
	 * @version CS4
	 */
	exportFile(exportFile:File, exportFormat:ExportType, options?:Object):void;

	/**
	 * Exports the current PDF preset values to the file.
	 * @param {File} file {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportPDFPreset(file:File):void;

	/**
	 * Exports the current perspective grid preset values to the file.
	 * @param {File} file {@link File} object
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	exportPerspectiveGridPreset(file:File):void;

	/**
	 * Exports the current print preset values to the file.
	 * @param {File} file {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportPrintPreset(file:File):void;

	/**
	 * Saves datasets into an XML library. The datasets contain variables and their associated dynamic data.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	exportVariables(fileSpec:File):void;

	/**
	 * Resizes the artboard at the given index to fit currently selected art. Index default is 0. Returns <b>true</b> on success.
	 * @param {Number} [index] {@link Number} long
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	fitArtboardToSelectedArt(index?:Number):Boolean;

	/**
	 * Retrieves the active plane of the active perspective grid of the document.
	 * @return {PerspectiveGridPlaneType} {@link PerspectiveGridPlaneType}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	getPerspectiveActivePlane():PerspectiveGridPlaneType;

	/**
	 * Hides the current active grid for the document. If no grid is visible, does nothing. Returns <b>true</b> if a grid is hidden.
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	hidePerspectiveGrid():Boolean;

	/**
	 * Captures the artwork content within the clipping boundaries in this document as a raster image, and writes the image data to a specified file.
	 * If the bounds parameter is omitted, captures the entire artwork.
	 * @param {File} imageFile {@link File} object
	 * @param {Number[]} [clipBounds] Rect. array of 4 numbers
	 * @param {ImageCaptureOptions} [options] {@link ImageCaptureOptions} object
	 * @see {@link Document}
	 * @since CS3
	 * @version CS3
	 */
	imageCapture(imageFile:File, clipBounds?:Number[], options?:ImageCaptureOptions):void;

	/**
	 * Loads the character styles from the Illustrator file.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importCharacterStyles(fileSpec:File):void;

	/**
	 * Loads the paragraph styles from the Illustrator file.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importParagraphStyles(fileSpec:File):void;

	/**
	 * Loads all PDF presets from a file.
	 * @param {File} fileSpec {@link File} object
	 * @param {Boolean} [replacingPreset] {@link Boolean}
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importPDFPreset(fileSpec:File, replacingPreset?:Boolean):void;

	/**
	 * Loads a specified perspective grid preset, or, if preset not specified, all presets from a file.
	 * @param {File} fileSpec {@link File} object
	 * @param {String} [perspectivePreset] {@link String}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	importPerspectiveGridPreset(fileSpec:File, perspectivePreset?:String):void;

	/**
	 * Loads the named print preset from the file.
	 * @param {String} printPreset {@link String}
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importPrintPreset(printPreset:String, fileSpec:File):void;

	/**
	 * Imports a library containing datasets, variables, and their associated dynamic data.
	 * Importing variables overwrites existing variables and datasets.
	 * @param {File} fileSpec {@link File} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	importVariables(fileSpec:File):void;

	/**
	 * Prints the document.
	 * @param {PrintOptions} [options] {@link PrintOptions} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	print(options?:PrintOptions):void;

	/**
	 * Rasterizes the source art(s) within the specified clip bounds. The source art(s) is disposed of as a result of the rasterization.
	 * @param {Object} sourceArt {@link Object} variant
	 * @param {Number[]} [clipBounds] Rect array of 4 {@link Number}
	 * @param {RasterizeOptions} [options] {@link RasterizeOptions} object
	 * @return {RasterItem} {@link RasterItem} object
	 * @see {@link Document}
	 * @since CS4
	 * @version CS4
	 */
	rasterize(sourceArt:Object, clipBounds?:Number[], options?:RasterizeOptions):RasterItem;

	/**
	 * Rearranges artboards in the document. All arguments are optional. Default layout style is {@link DocumentArtboardLayout.GridByRow}.
	 * The second argument specifies the number of rows or columns, as appropriate for the chosen layout style, in the range [1..docNumArtboards-1], or 1 (the default) for single row/column layouts.
	 * Spacing is a number of pixels, Default: <b>20</b>.
	 * When last argument is <b>true</b> (the default), artwork is moved with the artboards.
	 * @param {DocumentArtboardLayout} [artboardLayout] {@link DocumentArtboardLayout} Default layout style is {@link DocumentArtboardLayout.GridByRow}.
	 * @param {Number} [artboardRowsOrCols] {@link Number} integer. The number of rows or columns, as appropriate for the chosen layout style, in the range [1..docNumArtboards-1], or 1 (the default) for single row/column layouts.
	 * @param {Number} [artboardSpacing] {@link Number} Spacing is a number of pixels, Default: <b>20</b>.
	 * @param {Boolean} [artboardMoveArtwork] {@link Boolean} <b>true</b> (the default), artwork is moved with the artboards.
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	rearrangeArtboards(artboardLayout?:DocumentArtboardLayout, artboardRowsOrCols?:Number, artboardSpacing?:Number, artboardMoveArtwork?:Boolean):Boolean;

	/**
	 * Saves the document in it current location.
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	save():void;

	/**
	 * Saves the document in the specified file as an Illustrator, EPS, or PDF file.
	 * @param {File} saveIn {@link File} object
	 * @param {SaveOptions} [options] {@link SaveOptions} object
	 * @see {@link Document}
	 * @since CS2
	 * @version CS2
	 */
	saveAs(saveIn:File, options?:SaveOptions):void;

	/**
	 * Saves the non-UI document at the specified path
	 * @param {File} saveIn {@link File}
	 * @see {@link Document}
	 * @since CC2017
	 * @version CC2017
	 */
	saveNoUI(saveIn:File):void;

	/**
	 * Selects the objects on the currently active artboard. Returns <b>true</b> on success.
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	selectObjectsOnActiveArtboard():Boolean;

	/**
	 * Sets the active plane of the active perspective grid of the document. Returns <b>true</b> on success.
	 * @param {PerspectiveGridPlaneType} gridPlane {@link PerspectiveGridPlaneType}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	setActivePlane(gridPlane:PerspectiveGridPlaneType):Boolean;

	/**
	 * Selects a predefined preset to define grid for the current document. Returns <b>true</b> on success.
	 * @param {PerspectiveGridType} gridType {@link PerspectiveGridType}
	 * @param {String} presetName {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	selectPerspectivePreset(gridType:PerspectiveGridType, presetName:String):Boolean;

	/**
	 * Shows the current active grid for the document, or if no grid is active, shows the default grid. Returns <b>true</b> on success.
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Document}
	 * @since CS5
	 * @version CS5
	 */
	showPerspectiveGrid():Boolean;

	/**
	 * Captures the current document window to the target TIFF image file.
	 * @param {File} imageFile {@link File} object
	 * @param {Number[]} windowSize array of 2 {@link Number}
	 * @see {@link Document}
	 * @since CS4
	 * @version CS4
	 */
	windowCapture(imageFile:File, windowSize:Number[]):void;
}