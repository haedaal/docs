---
title: "Module config"
title_tag: "Module config | Package @pulumi/packet | Node.js SDK"
linktitle: "config"
meta_desc: "Explore members of the config module in the @pulumi/packet package."
git_sha: "fb216ee1d7d99ad8e7b9f8ca9ea143f5d6b2c1a4"
block_external_search_index: true
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

{{< resource-docs-alert "packet" >}}






<h3>APIs</h3>
<ul class="api">
    <li><a href="#authToken"><span class="symbol api"></span>authToken</a></li>
</ul>




<h2 id="apis">APIs</h2>
<h3 class="pdoc-module-header" id="authToken" data-link-title="authToken">
    <a href="https://github.com/pulumi/pulumi-packet/blob/fb216ee1d7d99ad8e7b9f8ca9ea143f5d6b2c1a4/sdk/nodejs/config/vars.ts#L12">
        let <strong>authToken</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> authToken: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;authToken&#34;) || utilities.getEnv(&#34;PACKET_AUTH_TOKEN&#34;)</span>;</code></pre>

The API auth key for API operations.

