---
title: "Module azure"
title_tag: "Module azure | Package @pulumi/datadog | Node.js SDK"
linktitle: "azure"
meta_desc: "Explore members of the azure module in the @pulumi/datadog package."
git_sha: "fb1d7bb05113900133753972d246e63d20da0c76"
block_external_search_index: true
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

{{< resource-docs-alert "datadog" >}}




<h3>Resources</h3>
<ul class="api">
    <li><a href="#Integration"><span class="symbol resource"></span>Integration</a></li>
</ul>


<h3>Others</h3>
<ul class="api">
    <li><a href="#IntegrationArgs"><span class="symbol api"></span>IntegrationArgs</a></li>
    <li><a href="#IntegrationState"><span class="symbol api"></span>IntegrationState</a></li>
</ul>


<h2 id="resources">Resources</h2>
<h3 class="pdoc-module-header" id="Integration" data-link-title="Integration">
    <a href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L25">
        Resource <strong>Integration</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>class</span> <span class='nx'>Integration</span> <span class='kr'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></code></pre>

Provides a Datadog - Microsoft Azure integration resource. This can be used to create and manage the integrations.

#### Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as datadog from "@pulumi/datadog";

// Create a new Datadog - Microsoft Azure integration
const sandbox = new datadog.azure.Integration("sandbox", {
    clientId: "<azure_client_id>",
    clientSecret: "<azure_client_secret_key>",
    hostFilters: "examplefilter:true,example:true",
    tenantName: "<azure_tenant_name>",
});
```

<h4 class="pdoc-member-header" id="Integration-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L56"> <b>constructor</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span><span class='kd'>new</span> Integration(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args: <a href='#IntegrationArgs'>IntegrationArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</code></pre>


Create a Integration resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

<h4 class="pdoc-member-header" id="Integration-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L35">method <b>get</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, state?: <a href='#IntegrationState'>IntegrationState</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#Integration'>Integration</a></code></pre>


Get an existing Integration resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

<h4 class="pdoc-member-header" id="Integration-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L25">method <b>getProvider</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ProviderResource'>ProviderResource</a> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></code></pre>

<h4 class="pdoc-member-header" id="Integration-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L46">method <b>isInstance</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): obj is Integration</code></pre>


Returns true if the given object is an instance of Integration.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

<h4 class="pdoc-member-header" id="Integration-clientId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L53">property <b>clientId</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>clientId: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="Integration-clientSecret">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L54">property <b>clientSecret</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>clientSecret: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="Integration-hostFilters">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L55">property <b>hostFilters</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>hostFilters: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="Integration-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L25">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</code></pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

<h4 class="pdoc-member-header" id="Integration-tenantName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L56">property <b>tenantName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>tenantName: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="Integration-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L25">property <b>urn</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</code></pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.



<h2 id="apis">Others</h2>
<h3 class="pdoc-module-header" id="IntegrationArgs" data-link-title="IntegrationArgs">
    <a href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L114">
        interface <strong>IntegrationArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>IntegrationArgs</span></code></pre>

The set of arguments for constructing a Integration resource.

<h4 class="pdoc-member-header" id="IntegrationArgs-clientId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L115">property <b>clientId</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>clientId: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="IntegrationArgs-clientSecret">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L116">property <b>clientSecret</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>clientSecret: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="IntegrationArgs-hostFilters">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L117">property <b>hostFilters</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>hostFilters?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="IntegrationArgs-tenantName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L118">property <b>tenantName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>tenantName: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h3 class="pdoc-module-header" id="IntegrationState" data-link-title="IntegrationState">
    <a href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L104">
        interface <strong>IntegrationState</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>IntegrationState</span></code></pre>

Input properties used for looking up and filtering Integration resources.

<h4 class="pdoc-member-header" id="IntegrationState-clientId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L105">property <b>clientId</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>clientId?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="IntegrationState-clientSecret">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L106">property <b>clientSecret</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>clientSecret?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="IntegrationState-hostFilters">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L107">property <b>hostFilters</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>hostFilters?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="IntegrationState-tenantName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-datadog/blob/fb1d7bb05113900133753972d246e63d20da0c76/sdk/nodejs/azure/integration.ts#L108">property <b>tenantName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>tenantName?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>
