<cfcomponent output="false" hint="API for Mura Header" rest="true" restPath="header">

    <cffunction name="getHeader" access="remote" returntype="string" httpmethod="GET" produces="text/html" hint="Returns the HTML for the Mura header section">
        <cfheader name="Access-Control-Allow-Origin" value="http://localhost:5173">
        <cfheader name="Access-Control-Allow-Methods" value="GET, POST, OPTIONS">
        <cfheader name="Access-Control-Allow-Headers" value="Content-Type, Authorization">

        <cfset var headerHTML = "" />

        <cftry>
            <cfset headerHTML = application.contentRenderer.getDisplayObject("header", "default-header-id", "html") />
            <cfcatch>
                <cfset headerHTML = "<p>Error loading header content.</p>" />
            </cfcatch>
        </cftry>

        <cfreturn headerHTML />
    </cffunction>

</cfcomponent>
