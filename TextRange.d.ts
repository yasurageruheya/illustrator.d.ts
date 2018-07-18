/**
 * A range of text in a specific text art item. {@link TextRange} gives you access to the text contained in text art items.
 *
 * @since CS2
 * @version CC2017
 *
 * <b>Properties</b>
 * ･ {@link characterAttributes}
 * ･ {@link characterOffset}
 * ･ {@link characters}
 * ･ {@link characterStyles}
 * ･ {@link contents}
 * ･ {@link end}
 * ･ {@link insertionPoints}
 * ･ {@link kerning}
 * ･ {@link length}
 * ･ {@link lines}
 * ･ {@link paragraphAttributes}
 * ･ {@link paragraphs}
 * ･ {@link paragraphStyles}
 * ･ {@link parent}
 * ･ {@link start}
 * ･ {@link story}
 * ･ {@link textRanges}
 * ･ {@link textSelection}
 * ･ {@link typename}
 * ･ {@link words}
 *
 * <b>Methods</b>
 * ･ {@link changeCaseTo}
 * ･ {@link deSelect}
 * ･ {@link duplicate}
 * ･ {@link getLocalCharOverridesJSON}
 * ･ {@link getLocalParaOverridesJSON}
 * ･ {@link getParagraphLength}
 * ･ {@link getTextRunLength}
 * ･ {@link move}
 * ･ {@link remove}
 * ･ {@link select}
 *
 * @example
 * ➤ Manipulating text
 *     // Changes size of the first character of each word in the
 *     // current document by changing the size attribute of each character
 *
 *     if (app.documents.length > 0) {
 *         for (i = 0; i < app.activeDocument.textFrames.length; i++) {
 *             text = app.activeDocument.textFrames[i].textRange;
 *             for (j = 0; j < text.words.length; j++) {
 *                 //each word is a textRange object
 *                 textWord = text.words[j];
 *                 // Characters are textRanges too.
 *                 // Get the first character of each word and increase it's size.
 *                 firstChars = textWord.characters[0];
 *                 firstChars.size = firstChars.size * 1.5;
 *             }
 *         }
 *     }
 */
declare class TextRange
{
	/**
	 * Read-only. The character properties for the text range.
	 * @const
	 * @type {CharacterAttributes} {@link CharacterAttributes} object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly characterAttributes:CharacterAttributes;

	/**
	 * Offset of the first character.
	 * @type {Number} long
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	characterOffset:Number;

	/**
	 * Read-only. All the characters in this text range.
	 * @const
	 * @type {Characters|TextRange[]} {@link Characters} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly characters:Characters|TextRange[];

	/**
	 * Read-only. All referenced character styles in the text range.
	 * @const
	 * @type {CharacterStyles|CharacterStyle[]} {@link CharacterStyles} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly characterStyles:CharacterStyles|CharacterStyle[];

	/**
	 * The text string.
	 * @type {String}
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	contents:String;

	/**
	 * End index of the text range.
	 * @type {Number} Int32
	 * @see {@link TextRange}
	 * @since CC2017
	 * @version CC2017
	 */
	end:Number;

	/**
	 * Read-only. All the insertion points in this text range.
	 * @const
	 * @type {InsertionPoints|InsertionPoint[]} {@link InsertionPoints} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly insertionPoints:InsertionPoints|InsertionPoint[];

	/**
	 * Controls the spacing between two characters, in thousandths of an em. An integer.
	 * @type {Number} long
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	kerning:Number;

	/**
	 * The <b>length</b> (in characters). Minimum: <b>0</b>
	 * @type {Number} long
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	length:Number;

	/**
	 * Read-only. All the lines in this text range.
	 * @const
	 * @type {Lines|TextRange[]} {@link Lines} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly lines:Lines|TextRange[];

	/**
	 * Read-only. The paragraph properties for the text range.
	 * @const
	 * @type {ParagraphAttributes} {@link ParagraphAttributes} object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphAttributes:ParagraphAttributes;

	/**
	 * Read-only. All the paragraphs in this text range.
	 * @const
	 * @type {Paragraphs|TextRange[]} {@link Paragraphs} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphs:Paragraphs|TextRange[];

	/**
	 * Read-only. All referenced paragraph styles in the text range.
	 * @const
	 * @type {ParagraphStyles|ParagraphStyle[]} {@link ParagraphStyles} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphStyles:ParagraphStyles|ParagraphStyle[];

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {TextRange} {@link TextRange} object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:TextRange;

	/**
	 * Start index of the text range.
	 * @type {Number} Int32
	 * @see {@link TextRange}
	 * @since CC2017
	 * @version CC2017
	 */
	start:Number;

	/**
	 * Read-only. The story to which the text range belongs.
	 * @const
	 * @type {Story} {@link Story} object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly story:Story;

	/**
	 * Read-only. All of the text in this text range.
	 * @const
	 * @type {TextRanges|TextRange[]} {@link TextRanges} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly textRanges:TextRanges|TextRange[];

	/**
	 * Read-only. The selected text ranges in the text range.
	 * @const
	 * @type {TextRange[]} array of {@link TextRange} objects
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly textSelection:TextRange[];

	/**
	 * Read-only. The class name o f the object.
	 * @const
	 * @type {String}
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Read-only. All the words contained in this text range.
	 * @const
	 * @type {Words|TextRange[]} {@link Words} collection object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	readonly words:Words|TextRange[];

	/**
	 * Changes the capitalization of text.
	 * @param {CaseChangeType} type {@link CaseChangeType}
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	changeCaseTo(type:CaseChangeType):void;

	/**
	 * Deselects the text range.
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	deSelect():void;

	/**
	 * Creates a {@link duplicate} of this object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):TextRange;

	/**
	 * Gets json representation of character overrides.
	 * @return {String} {@link String}
	 * @see {@link TextRange}
	 * @since CC2017
	 * @version CC2017
	 */
	getLocalCharOverridesJSON():String;

	/**
	 * Gets json representation of paragraph overrides.
	 * @return {String} {@link String}
	 * @see {@link TextRange}
	 * @since CC2017
	 * @version CC2017
	 */
	getLocalParaOverridesJSON():String;

	/**
	 * Gets the <b>length</b> of the first paragraph of the text range.
	 * @return {Number} {@link Number} Int32
	 * @see {@link TextRange}
	 * @since CC2017
	 * @version CC2017
	 */
	getParagraphLength():Number;

	/**
	 * Gets the <b>length</b> of the first text run of the text range.
	 * @return {Number} {@link Number} Int32
	 * @see {@link TextRange}
	 * @since CC2017
	 * @version CC2017
	 */
	getTextRunLength():Number;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):TextRange;

	/**
	 * Deletes the object.
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Selects the text range. If <b>addToDocument</b> is <b>true</b>, adds this to the current selection; otherwise replaces the current selection.
	 * @param {Boolean} [addToDocument] {@link Boolean}
	 * @see {@link TextRange}
	 * @since CS2
	 * @version CS2
	 */
	select(addToDocument?:Boolean):void;
}