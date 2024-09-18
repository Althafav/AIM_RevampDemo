
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Thu Nov 02 2023 12:02:58 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Startuppartnercontainer extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public banneritems!: Elements.LinkedItemsElement<ContentItem>;
    public items!: Elements.LinkedItemsElement<ContentItem>;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                return elementName;
            })
        });
    }
}