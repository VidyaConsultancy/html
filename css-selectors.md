## CSS Selectors
### Basic Selectors
- Universal selector eg * {}
- Element selector eg elementname {}
- Id selector eg #id {}
- Class selector eg .classname {}

### Combinator Selectors
- Descendent selector eg selectorA selectorB {}
- Child selector eg selectorA > selectorB {}
- General sibling selector eg selectorA ~ selectorB {}
- Immediate sibling selector eg selectorA + selectorB {}

### Attribute Selectors
eg
[attr] => attribute presence
[attr=value] => attribute value exactly equal
[attr^=value] => attribute value starting with value
[attr$=value] => attribute value ending with value
[attr~=value] => attribute value containing value separated with spaces
[attr|=value] => attribute value starting with value separated with hyphen
[attr*=value] => attribute value contains value

### Pseudo classes
eg
:first-child
:last-child
:nth-child
:nth-last-child
:first-of-type
:last-of-type
:nth-of-type
:nth-last-of-type

### Pseudo elements
eg
::first-letter
::first-line
::before
::after