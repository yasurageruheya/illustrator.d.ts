/**
 * Specifies the properties and attributes of a paragraph contained in a text frame.
 * <b>Note:</b> Paragraph attributes do not have default values, and are undefined until explicitly set.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link autoLeadingAmount}
 * ･ {@link bunriKinshi}
 * ･ {@link burasagariType}
 * ･ {@link desiredGlyphScaling}
 * ･ {@link desiredLetterSpacing}
 * ･ {@link desiredWordSpacing}
 * ･ {@link everyLineComposer}
 * ･ {@link firstLineIndent}
 * ･ {@link hyphenateCapitalizedWords}
 * ･ {@link hyphenation}
 * ･ {@link hyphenationPreference}
 * ･ {@link hyphenationZone}
 * ･ {@link justification}
 * ･ {@link kinsoku}
 * ･ {@link kinsokuOrder}
 * ･ {@link kurikaeshiMojiShori}
 * ･ {@link leadingType}
 * ･ {@link leftIndent}
 * ･ {@link maximumConsecutiveHyphens}
 * ･ {@link maximumGlyphScaling}
 * ･ {@link maximumLetterSpacing}
 * ･ {@link maximumWordSpacing}
 * ･ {@link minimumAfterHyphen}
 * ･ {@link minimumBeforeHyphen}
 * ･ {@link minimumGlyphScaling}
 * ･ {@link minimumHyphenatedWordSize}
 * ･ {@link minimumLetterSpacing}
 * ･ {@link minimumWordSpacing}
 * ･ {@link mojikumi}
 * ･ {@link parent}
 * ･ {@link rightIndent}
 * ･ {@link romanHanging}
 * ･ {@link singleWordJustification}
 * ･ {@link spaceAfter}
 * ･ {@link spaceBefore}
 * ･ {@link tabStops}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Changing justification in paragraphs
 *    // Add a new document with an area text item
 *    // containing 3 paragraphs.
 *    var docRef = documents.add();
 *    var pathRef = docRef.pathItems.rectangle(600, 200, 200, 400);
 *    var textRef = docRef.textFrames.areaText(pathRef);
 *    textRef.paragraphs.add("Left justified paragraph.");
 *    textRef.paragraphs.add("Center justified paragraph.");
 *    textRef.paragraphs.add("Right justified paragraph.");
 *    textRef.textRange.characterAttributes.size = 28;
 *
 *    // change the justification of each paragraph
 *    // using the paragraph attributes object
 *    var paraAttr_0 = textRef.paragraphs[0].paragraphAttributes;
 *    paraAttr_0.justification = Justification.RIGHT;
 *    var paraAttr_1 = textRef.paragraphs[1].paragraphAttributes;
 *    paraAttr_1.justification = Justification.CENTER;
 *    var paraAttr_2 = textRef.paragraphs[2].paragraphAttributes;
 *    paraAttr_2.justification = Justification.LEFT;
 */
declare class ParagraphAttributes
{
	/**
	 * Auto leading amount expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	autoLeadingAmount:Number;

	/**
	 * If <b>true</b>, BunriKinshi is enabled.
	 * @type {Boolean}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	bunriKinshi:Boolean;

	/**
	 * The Burasagari type.
	 * @type {BurasagariTypeEnum}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	burasagariType:BurasagariTypeEnum;

	/**
	 * Glyph scaling expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	desiredGlyphScaling:Number;

	/**
	 * Letter spacing expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	desiredLetterSpacing:Number;

	/**
	 * Word spacing expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	desiredWordSpacing:Number;

	/**
	 * If <b>true</b>, the every-line composer is enabled (as opposed to single-line composer).
	 * @type {Boolean}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	everyLineComposer:Boolean;

	/**
	 * First line left indent in points.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	firstLineIndent:Number;

	/**
	 * If <b>true</b>, hyphenation is enabled for capitalized words.
	 * @type {Boolean}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	hyphenateCapitalizedWords:Boolean;

	/**
	 * If <b>true</b>, hyphenation is enabled for the paragraph.
	 * @type {Boolean}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	hyphenation:Boolean;

	/**
	 * Hyphenation preference scale for better spacing (0) or fewer hyphens (1). Range: 0.0 to 1.0
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	hyphenationPreference:Number;

	/**
	 * The size of the hyphenation zone in points.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	hyphenationZone:Number;

	/**
	 * Paragraph justification.
	 * @type {Justification}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	justification:Justification;

	/**
	 * The Kinsoku Shori name.
	 * @type {String}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	kinsoku:String;

	/**
	 * The preferred Kinsoku order.
	 * @type {KinsokuOrderEnum}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	kinsokuOrder:KinsokuOrderEnum;

	/**
	 * If <b>true</b>, KurikaeshiMojiShori is enabled.
	 * @type {Boolean}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	kurikaeshiMojiShori:Boolean;

	/**
	 * Auto leading type.
	 * @type {AutoLeadingType}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	leadingType:AutoLeadingType;

	/**
	 * The left indent of margin in points.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	leftIndent:Number;

	/**
	 * Maximum number of consecutive hyphenated lines.
	 * @type {Number} long
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	maximumConsecutiveHyphens:Number;

	/**
	 * Maximum glyph scaling expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	maximumGlyphScaling:Number;

	/**
	 * Maximum letter spacing expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	maximumLetterSpacing:Number;

	/**
	 * Maximum word spacing expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	maximumWordSpacing:Number;

	/**
	 * Minimum number of characters after a hyphen.
	 * @type {Number} long
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	minimumAfterHyphen:Number;

	/**
	 * Minimum number of characters before a hyphen.
	 * @type {Number} long
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	minimumBeforeHyphen:Number;

	/**
	 * Minimum glyph scaling expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	minimumGlyphScaling:Number;

	/**
	 * Minimum number of characters for a word to be hyphenated.
	 * @type {Number} long
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	minimumHyphenatedWordSize:Number;

	/**
	 * Minimum letter spacing expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	minimumLetterSpacing:Number;

	/**
	 * Minimum word spacing expressed as a percentage.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	minimumWordSpacing:Number;

	/**
	 * The Mojikumi name.
	 * @type {String}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	mojikumi:String;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Right indent of margin in points.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	rightIndent:Number;

	/**
	 * If <b>true</b>, Roman hanging punctuation is enabled.
	 * @type {Boolean}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	romanHanging:Boolean;

	/**
	 * Single word justification.
	 * @type {Justification}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	singleWordJustification:Justification;

	/**
	 * Spacing after paragraph in points.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	spaceAfter:Number;

	/**
	 * Spacing before paragraph in points.
	 * @type {Number} double
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	spaceBefore:Number;

	/**
	 * Tab stop settings.
	 * @type {TabStopInfo} {@link TabStopInfo} object
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	tabStops:TabStopInfo;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link ParagraphAttributes}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}