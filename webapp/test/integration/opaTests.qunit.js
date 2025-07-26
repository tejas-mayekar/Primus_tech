sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/AgencyList',
		'project1/test/integration/pages/AgencyObjectPage'
    ],
    function(JourneyRunner, opaJourney, AgencyList, AgencyObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAgencyList: AgencyList,
					onTheAgencyObjectPage: AgencyObjectPage
                }
            },
            opaJourney.run
        );
    }
);