
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Tue Sep 10 2024 15:53:53 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Portfoliopage extends ContentItem {
    public pagetitle!: Elements.TextElement;
    public metatitle!: Elements.TextElement;
    public metadescription!: Elements.TextElement;
    public bannerheading!: Elements.TextElement;
    public bannersubheading!: Elements.TextElement;
    public dateandvenu!: Elements.TextElement;
    public bannercta!: Elements.LinkedItemsElement<ContentItem>;
    public bannerimage!: Elements.AssetsElement;
    public aboutheading!: Elements.TextElement;
    public aboutparagraph!: Elements.RichTextElement;
    public featureheading!: Elements.TextElement;
    public featuresubheading!: Elements.TextElement;
    public features!: Elements.LinkedItemsElement<ContentItem>;
    public featuresbriefheading!: Elements.TextElement;
    public featuresbriefcontent!: Elements.RichTextElement;
    public ctabannerheading!: Elements.TextElement;
    public ctabannersubheading!: Elements.TextElement;
    public benefitsheading!: Elements.TextElement;
    public benefitssubheading!: Elements.TextElement;
    public benefits!: Elements.LinkedItemsElement<ContentItem>;
    public faq!: Elements.LinkedItemsElement<ContentItem>;
}
