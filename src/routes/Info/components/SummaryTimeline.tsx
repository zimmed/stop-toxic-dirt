import * as React from 'react';
import moment from 'moment';
import { Panel, A } from '~features/ui/components';
import { projectSchedule } from '~data';

function SummaryTimeline() {
  return (
    <Panel preview={true} maxHeight="16.5em">
      <p className="small">
        <em>
          [ Copied from:{' '}
          <A src="https://town.pepperell.ma.us/DocumentCenter/View/4628/Soil-Reclamation-Summary-Revised-07-01-2019">
            https://town.pepperell.ma.us/DocumentCenter/View/4628/Soil-Reclamation-Summary-Revised-07-01-2019
          </A>{' '}
          ]
        </em>
      </p>
      <h3 className="center">
        Soil Reclamation Project Proposal
        <br />
        Summary and Timeline
      </h3>
      <p>Updated on July 1, 2019</p>
      <p className="indent justify">
        The Town of Pepperell wishes to be diligent about keeping residents up
        to date on the proposed Soil Reclamation Project and we realize that
        there is a lot of information to consider. Through the Town webpage, on
        Town and private social media, and various other formats, we want to
        ensure that accurate information is available. To that end, we have
        created this summary document which will be updated regularly. Most
        importantly, we want to ensure the residents of Pepperell that the
        Town’s position has not changed – the Town is adamantly opposed to the
        proposed project.
      </p>
      <p className="indent justify">
        For some time, the owners of the property known locally as{' '}
        <strong>‘161 Nashua Road’</strong> have been interested in its
        re-development. Various ideas have been proposed formally and
        informally. On October 25, 2017 owner representatives met with the
        Pepperell Town Administrator to discuss one such idea. Subsequently, a
        meeting was held on December 5, 2017 with the owner representatives, the
        Town Administrator and the Town Planner. According to an email from May
        4, 2018, the Town Administrator told the representatives at the December
        5, 2017 meeting that the proposed project was a ‘non-starter.’
      </p>
      <p className="indent justify">
        <strong>
          On February 12, 2018, Terra-Environmental, representing the owners,
          sent a 16 page project overview and in it requested a letter of
          support from the Town of Pepperell for a soil reclamation project.
        </strong>{' '}
        On April 25, 2018, a citizen inquired about the project which had not
        yet been announced to the Board of Selectmen or the general public. By
        April 30, 2018, the Town Administrator and other staff members had
        responded that no proposals or Notices of Intent had been filed. By May
        4, 2018, when the February 12, 2018 project overview was made public, it
        created concerns that a lot of planning seemed to be happening over a
        length of time, with limited public disclosure.
      </p>
      <p className="indent justify">
        Ultimately, a formal proposal was brought to the Town of Pepperell by
        MCGI, Inc. in July of 2018 at which point the Town hired legal counsel
        to guide us through the proposal and to assist us in making educated,
        well-informed decisions that protect the citizens of Pepperell for both
        current and future generations. It became clear at the public
        presentation in August of 2018 where the residents stood in respect to
        the proposed project and since that time the Town has received, reviewed
        and shared with the public documents about the project and in support of
        the Town’s concerns.
      </p>
      <p className="indent justify">
        A lot of time has passed since the original proposal and the town is
        mindful of the resident’s concerns regarding this proposed project. MCGI
        believes they can do the soil reclamation they have proposed as of
        right; the Town disagrees. MCGI has indicated that they won’t proceed
        without an Administrative Consent Order (ACO) and MassDEP will not issue
        an ACO without the Town of Pepperell’s agreement. The Town has made it
        clear to MassDEP it will not agree. Several Town departments have sent
        letters of opposition to MassDEP and MCGI.
      </p>
      <p className="indent justify">
        In October 2018, the Town of Pepperell Building Inspector issued a
        response to a Board of Selectmen query about the allowed uses on the 161
        Nashua Road site. The Inspector advised that a ‘Commercial Waste Dump’
        is not an allowed use anywhere in Pepperell and that based on the
        information then available,{' '}
        <strong>
          the proposed project constituted a Commercial Waste Dump.
        </strong>{' '}
        The proponent of the project disagreed and appealed to the Zoning Board
        of Appeals (ZBA). The ZBA, is part of our local government, but should,
        and does, act on its own accord. The ZBA, overturned the Building
        Inspector advice but this was limited in that it turned on MCGI’s
        argument that what they were proposing was NOT a commercial waste dump.
        The Town and a group of local abutters each appealed the ZBA decision to
        the Massachusetts Land Court. The judge assigned to the appeals combined
        the cases in April and has asked for input on out of court settlement
        possibilities by June 28, 2019. On June 28, 2019, the following
        statement was entered into the record at Land Court:
      </p>
      <h4 className="center">JOINT STATEMENT CONCERNING MEDIATION</h4>
      <p className="indent justify">
        <em>
          The parties in the above-captioned, consolidated cases report that
          they have conferred and do not believe that mediation or other
          alternative dispute resolution would be productive at this stage of
          the proceedings.
        </em>
      </p>
      <p className="indent justify">
        <strong>The next formal court date is September 30, 2019.</strong>
      </p>
      <p className="indent justify">
        The Town of Pepperell wants to reassure the public that, as decisions
        are made and documents created or received, we are posting the
        information on our website. If the developer tries to proceed with this
        project, the Town has actions it can take to halt the progress.
      </p>
      <p className="indent justify">
        To reiterate, the Town of Pepperell does not support this Project and we
        are providing information as it becomes available to us. The Board of
        Health adopted Fill Importation Regulations in December of 2018. The
        Board of Selectmen have made their stance clear in public and in two
        written documents to MassDEP. The Board of Selectmen also continue to
        provide updates at each of their regularly scheduled meetings.
      </p>
      <p className="indent justify">
        Below is also a table of the timeline of events and documents that have
        occurred with this project. The complete documents can be found on the
        Town of Pepperell webpage:
      </p>
      <p className="indent justify">
        <A src="https://town.pepperell.ma.us/566/4080/Soil-Reclamation-Proposal">
          https://town.pepperell.ma.us/566/4080/Soil-Reclamation-Proposal
        </A>
      </p>
      <p className="indent justify">
        We thank you for your continued interest in this proposal and assure you
        we will keep you informed of any and all matters related to this
        proposal.
      </p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Information Updated</th>
          </tr>
        </thead>
        <tbody>
          {projectSchedule.map(({ date, items }, i) => (
            <tr key={i}>
              <td>{moment(date, 'YYYY/MM/DD').format('D MMM YY')}</td>
              <td>
                <ul>
                  {items.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

export default SummaryTimeline;
