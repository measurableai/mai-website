import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { title, contentFontStyle, content, item } from "./style"

const Content = ({ ...props }) => (
  <p css={theme => [contentFontStyle(theme), content]} {...props}></p>
)

const Item = ({ ...props }) => (
  <li css={theme => [contentFontStyle(theme), content, item]} {...props}></li>
)

const TermsSection = props => (
  <div {...props}>
    <h1 css={title}>
      <FormattedMessage id="termsOfUse" defaultMessage="TERMS OF USE" />
    </h1>
    <div>
      <Content>
        <strong>
          PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES (DEFINED
          BELOW) ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO NOT AGREE TO ALL
          OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY
          MANNER.
        </strong>
      </Content>
      <Content>
        <strong>&nbsp;</strong>
      </Content>
      <Content>
        <strong>
          Welcome to Measurable AI. Please read on to learn the rules and
          restrictions that govern your use of our website(s), products,
          services and applications (the “Services”). If you have any questions,
          comments, or concerns regarding these terms or the Services, please
          contact us at business@measurable.ai.
        </strong>
      </Content>
      <Content>
        <strong>
          These Terms of Use (the “Terms”) are a binding contract between you
          and Alternative Data Limited (“Measurable AI,” “we” and “us”). You
          must agree to and accept all of the Terms, or you don’t have the right
          to use the Services. Your using the Services in any way means that you
          agree to all of these Terms, and these Terms will remain in effect
          while you use the Services. These Terms include the provisions in this
          document, as well as those in the Privacy Policy.
        </strong>
      </Content>
      <Content>
        <strong>Will these Terms ever change?</strong>
      </Content>
      <Content>
        <strong>
          We are constantly trying to improve our Services, so these Terms may
          need to change along with the Services. We reserve the right to change
          the Terms at any time, but if we do, we will bring it to your
          attention by placing a notice on the https://measurable.ai website, by
          sending you an email, and/or by some other means.
        </strong>
      </Content>
      <Content>
        <strong>
          If you don’t agree with the new Terms, you are free to reject them;
          unfortunately, that means you will no longer be able to use the
          Services. If you use the Services in any way after a change to the
          Terms is effective, that means you agree to all of the changes.
        </strong>
      </Content>
      <Content>
        <strong>
          Except for changes by us as described here, no other amendment or
          modification of these Terms will be effective unless in writing and
          signed by both you and us.
        </strong>
      </Content>
      <Content>
        <strong>What about my privacy?</strong>
      </Content>
      <Content>
        <strong>
          Measurable AI takes the privacy of its users very seriously. For the
          current Measurable AI Privacy Policy, please click here.
        </strong>
      </Content>
      <Content>
        <strong>
          The Children’s Online Privacy Protection Act (“COPPA”) requires that
          online service providers obtain parental consent before they knowingly
          collect personally identifiable information online from children who
          are under 13. We do not knowingly collect or solicit personally
          identifiable information from children under 13; if you are a child
          under 13, please do not attempt to register for the Services or send
          any personal information about yourself to us. If we learn we have
          collected personal information from a child under 13, we will delete
          that information as quickly as possible. If you believe that a child
          under 13 may have provided us personal information, please contact us
          at business@measurable.ai.
        </strong>
      </Content>
      <Content>
        <strong>What are the basics of using Measurable AI?</strong>
      </Content>
      <Content>
        <strong>Signing up for Measurable AI Services</strong>
      </Content>
      <Content>
        <strong>
          When you interact with the Services, you promise to provide us with
          accurate, complete, and updated information. You represent and warrant
          that you are of legal age to form a binding contract (or if not,
          you’ve received your parent’s or guardian’s permission to use the
          Services and gotten your parent or guardian to agree to these Terms on
          your behalf). If you’re agreeing to these Terms on behalf of an
          organization or entity, you represent and warrant that you are
          authorized to agree to these Terms on that organization or entity’s
          behalf and bind them to these Terms (in which case, the references to
          “you” and “your” in these Terms, except for in this sentence, refer to
          that organization or entity). You will only use the Services for your
          own internal, personal, non-commercial use, and not on behalf of or
          for the benefit of any third party, and only in a manner that complies
          with all laws that apply to you. If your use of the Services is
          prohibited by applicable laws, then you aren’t authorized to use the
          Services. We can’t and won’t be responsible for your using the
          Services in a way that breaks the law.
        </strong>
      </Content>
      <Content>
        <strong>
          Your use of the Services is subject to the following additional
          restrictions:
        </strong>
      </Content>
      <Content>
        <strong>
          You represent, warrant, and agree that you will not contribute any
          Content or User Submission (each of those terms is defined below) or
          otherwise use the Services or interact with the Services in a manner
          that:
        </strong>
      </Content>
      <ul>
        <Item>
          <Content>
            <strong>
              Infringes or violates the intellectual property rights or any
              other rights of anyone else (including Measurable AI);
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Violates any law or regulation, including any applicable export
              control laws;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Is harmful, fraudulent, deceptive, threatening, harassing,
              defamatory, obscene, or otherwise objectionable;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Jeopardizes the security of the Measurable AI Services);
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Attempts, in any manner, to obtain the password, account, or other
              security information from any other user;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Violates the security of any computer network, or cracks any
              passwords or security encryption codes;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Runs Maillist, Listserv, any form of auto-responder or “spam” on
              the Services, or any processes that run or are activated while you
              are not logged into the Services, or that otherwise interfere with
              the proper working of the Services (including by placing an
              unreasonable load on the Services’ infrastructure);
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              “Crawls,” “scrapes,” or “spiders” any page, data, or portion of or
              relating to the Services or Content (through use of manual or
              automated means);
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Copies or stores any significant portion of the Content, or uses
              any of the Content (including, without limitation, the Measurable
              AI’s content) to create any service, software, documentation or
              data that is similar to any aspect of the Measurable AI Services;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Decompiles, reverse engineers, or otherwise attempts to obtain the
              source code or underlying ideas or information of or relating to
              the Services;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Encumbers, sublicenses, transfers, rents, leases, time-shares or
              uses the Services in any service bureau arrangement or otherwise
              for the benefit of any third party;
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Copys, reproduces, distributes, manufactures, adapts, creates
              derivative works of, translates, localizes, ports or otherwise
              modifies any aspect of the Services; or
            </strong>
          </Content>
        </Item>
        <Item>
          <Content>
            <strong>
              Permits any third party to engage in any of the foregoing
              proscribed acts.
            </strong>
          </Content>
        </Item>
      </ul>
      <Content>
        <strong>
          A violation of any of the foregoing is grounds for termination of your
          right to use or access the Services.
        </strong>
      </Content>
      <Content>
        <strong>What are my rights in Measurable AI?</strong>
      </Content>
      <Content>
        <strong>
          The materials displayed or performed or available on or through the
          Services, including, but not limited to, text, graphics, data,
          articles, photos, images, illustrations, User Submissions, and so
          forth (all of the foregoing, the “Content”) are protected by copyright
          and/or other intellectual property laws. You promise to abide by all
          copyright notices, trademark rules, information, and restrictions
          contained in any Content you access through the Services, and you
          won’t use, copy, reproduce, modify, translate, publish, broadcast,
          transmit, distribute, perform, upload, display, license, sell or
          otherwise exploit for any purpose any Content not owned by you, (i)
          without the prior consent of the owner of that Content or (ii) in a
          way that violates someone else’s (including Measurable AI’s) rights.
        </strong>
      </Content>
      <Content>
        <strong>
          You understand that Measurable AI owns the Services. You won’t modify,
          publish, transmit, participate in the transfer or sale of, reproduce
          (except as expressly provided in this Section), create derivative
          works based on, or otherwise exploit any of the Services.
        </strong>
      </Content>
      <Content>
        <strong>
          The Services may allow you to copy or download certain Content; please
          remember that just because this functionality exists, doesn’t mean
          that all the restrictions above don’t apply – they do!
        </strong>
      </Content>
      <Content>
        <strong>
          Who is responsible for what I see and do on the Services?
        </strong>
      </Content>
      <Content>
        <strong>
          Any information or content publicly posted or privately transmitted
          through the Services is the sole responsibility of the person from
          whom such content originated, and you access all such information and
          content at your own risk, and we aren’t liable for any errors or
          omissions in that information or content or for any damages or loss
          you might suffer in connection with it. We cannot control and have no
          duty to take any action regarding how you may interpret and use the
          Content or what actions you may take as a result of having been
          exposed to the Content, and you hereby release us from all liability
          for you having acquired or not acquired Content through the Services.
          We can’t guarantee the identity of any users with whom you interact in
          using the Services and are not responsible for which users gain access
          to the Services. You understand that we may or may not pre-screen
          Content, but that we reserves the right (but are not obligated) in our
          sole discretion to pre-screen, refuse, or remove any Content that is
          available via the Services. Without limiting the foregoing, Measurable
          AI shall have the right to remove any Content that violates this
          Agreement or is otherwise objectionable. You agree that you must
          evaluate, and bear all risks associated with, the use of any Content,
          including any reliance on the accuracy, completeness, or usefulness of
          such Content.
        </strong>
      </Content>
      <Content>
        <strong>
          You are responsible for all Content (including all User Submissions
          such as information from you or your email accounts that you connect
          with the Services) you contribute, in any manner, to the Services, and
          you represent and warrant you have all rights necessary to do so, in
          the manner in which you contribute it. You will keep all your
          registration information accurate and current. You are responsible for
          all your activity in connection with the Services, such as sending,
          receiving, copying, sharing, uploading, downloading, attaching or
          otherwise acting with respect to your Content while using Measurable
          AI).
        </strong>
      </Content>
      <Content>
        <strong>
          The Services may contain links or connections to third party websites
          or services that are not owned or controlled by Measurable AI. When
          you access third party websites or use third party services, you
          accept that there are risks in doing so, and that Measurable AI is not
          responsible for such risks. We encourage you to be aware when you
          leave the Services and to read the terms and conditions and privacy
          policy of each third party website or service that you visit or
          utilize. Measurable AI has no control over, and assumes no
          responsibility for, the content, accuracy, privacy policies, or
          practices of or opinions expressed in any third party websites or by
          any third party that you interact with through the Services. In
          addition, Measurable AI will not and cannot monitor, verify, censor or
          edit the content of any third party site or service. By using the
          Services, you release and hold us harmless from any and all liability
          arising from your use of any third party website or service.
        </strong>
      </Content>
      <Content>
        <strong>
          Your interactions with organizations and/or individuals found on or
          through the Services, including payment and delivery of goods or
          services, and any other terms, conditions, warranties or
          representations associated with such dealings, are solely between you
          and such organizations and/or individuals. You should make whatever
          investigation you feel necessary or appropriate before proceeding with
          any online or offline transaction with any of these third parties. You
          agree that Measurable AI shall not be responsible or liable for any
          loss or damage of any sort incurred as the result of any such
          dealings.
        </strong>
      </Content>
      <Content>
        <strong>
          If there is a dispute between participants on this site, or between
          users and any third party, you agree that Measurable AI is under no
          obligation to become involved. In the event that you have a dispute
          with one or more other users, you release Measurable AI, its officers,
          employees, agents, and successors from claims, demands, and damages of
          every kind or nature, known or unknown, suspected or unsuspected,
          disclosed or undisclosed, arising out of or in any way related to such
          disputes and/or our Services. If you are a California resident, you
          shall and hereby do waive California Civil Code Section 1542, which
          says: "A general release does not extend to claims which the creditor
          does not know or suspect to exist in his or her favor at the time of
          executing the release, which, if known by him or her must have
          materially affected his or her settlement with the debtor."
        </strong>
      </Content>
      <Content>
        <strong>Will Measurable AI ever change the Services?</strong>
      </Content>
      <Content>
        <strong>
          We’re always trying to improve the Services, so they may change over
          time. We may suspend or discontinue any part of the Services, or we
          may introduce new features or impose limits on certain features or
          restrict access to parts or all of the Services. We’ll try to give you
          notice when we make a material change to the Services that would
          adversely affect you, but this isn’t always practical. Similarly, we
          reserve the right to remove any Content from the Services at any time,
          for any reason (including, but not limited to, if someone alleges you
          contributed that Content in violation of these Terms), in our sole
          discretion, and without notice.
        </strong>
      </Content>
      <Content>
        <strong>What if I want to stop using Measurable AI?</strong>
      </Content>
      <Content>
        <strong>
          You can stop visiting our websites at any time, but mere cease to use
          the website is not sufficient to delete your account. If you want to
          stop using the Services and deleting your account from the Services,
          please be sure to send a written disconnection request to us at
          business@measurable.ai. Please refer to our Privacy Policy, as well as
          the licenses above, to understand how we treat information you provide
          to us after you have stopped using our Services.
        </strong>
      </Content>
      <Content>
        <strong>
          Measurable AI is also free to terminate (or suspend access to) your
          use of the Services, for any reason in our discretion, including your
          breach of these Terms. Measurable AI has the sole right to decide
          whether you are in violation of any of the restrictions set forth in
          these Terms.
        </strong>
      </Content>
      <Content>
        <strong>
          Termination may result in destruction of any Content associated with
          you, so keep that in mind before you decide to terminate your use of
          the Services. We may store account data on the device upon which the
          Services are installed and you are responsible for backing up and
          securing data on your device; Measurable AI is not responsible for
          loss of account information due to device loss, data loss, system
          malfunction, and/or application malfunction. We will try to provide
          advance notice to you prior to our terminating your use of the
          Services so that you are able to retrieve any important User
          Submissions you may have stored in your account (to the extent allowed
          by law and these Terms), but we may not do so if we determine it would
          be impractical, illegal, not in the interest of someone’s safety or
          security, or otherwise harmful to the rights or property of Measurable
          AI.
        </strong>
      </Content>
      <Content>
        <strong>
          Provisions that, by their nature, should survive termination of these
          Terms shall survive termination. By way of example, all of the
          following will survive termination: any obligation you have to pay us
          or indemnify us, any limitations on our liability, any terms regarding
          ownership or intellectual property rights, and terms regarding
          disputes between us.
        </strong>
      </Content>
      <Content>
        <strong>What else do I need to know?</strong>
      </Content>
      <Content>
        <strong>
          Warranty Disclaimer. Neither Measurable AI nor its licensors or
          suppliers makes any representations or warranties concerning any
          content contained in or accessed through the Services, and we will not
          be responsible or liable for the accuracy, copyright compliance,
          legality, or decency of material contained in or accessed through the
          Services. We (and our licensors and suppliers) make no representations
          or warranties regarding suggestions or recommendations of services or
          products offered or purchased through the Services. Products and
          services purchased or offered (whether or not following such
          recommendations and suggestions) through the Services are provided “AS
          IS” and “AS AVAILABLE” and without any warranty of any kind from
          Measurable AI or others (unless, with respect to such others only,
          provided expressly and unambiguously in writing by a designated third
          party for a specific product).] THE SERVICES AND CONTENT ARE PROVIDED
          BY Measurable AI (AND ITS LICENSORS AND SUPPLIERS) ON AN “AS-IS” AND
          “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
          OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
          THAT USE OF THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR
          ERROR-FREE, OR THAT THE RESULTS THAT MAY BE OBTAINED THROUGH THE
          SERVICES WILL BE ACCURATE, RELIABLE, OR MEET YOUR EXPECTATIONS. SOME
          STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS,
          SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
        </strong>
      </Content>
      <Content>
        <strong>
          You shall not use Measurable AI Services for emergency services or
          other critical operations where injury, death, or economic damage
          could result. A small percentage of users may experience epileptic
          seizures when exposed to certain light patterns or backgrounds on a
          computer and /or portable device screen or while using the Services.
          Certain conditions may induce previously undetected epileptic symptoms
          even in users who have no history of prior seizures or epilepsy. If
          you, or anyone in your family, have an epileptic condition, consult
          your physician prior to using the Services. Immediately discontinue
          use of the Services and consult your physician if you experience any
          of the following symptoms while using the Services: dizziness, altered
          vision, eye or muscle twitches, loss of awareness, disorientation, any
          involuntary movement, or convulsions.
        </strong>
      </Content>
      <Content>
        <strong>
          Limitation of Liability. TO THE FULLEST EXTENT ALLOWED BY APPLICABLE
          LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING,
          WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE)
          SHALL Measurable AI (OR ITS LICENSORS OR SUPPLIERS) BE LIABLE TO YOU
          OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, OR
          CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS,
          LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER
          FAILURE OR MALFUNCTION, OR (B) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS
          OF THE GREATER OF (I) $100 OR (II) THE AMOUNTS PAID BY YOU TO COMPANY
          IN CONNECTION WITH THE SERVICES IN THE TWELVE (12) MONTH PERIOD
          PRECEDING THIS APPLICABLE CLAIM, OR (C) ANY MATTER BEYOND OUR
          REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR
          LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS
          MAY NOT APPLY TO YOU.
        </strong>
      </Content>
      <Content>
        <strong>
          Indemnity. To the fullest extent allowed by applicable law, You agree
          to indemnify and hold Measurable AI, its affiliates, officers, agents,
          employees, and partners harmless from and against any and all claims,
          liabilities, damages (actual and consequential), losses and expenses
          (including attorneys’ fees) arising from or in any way related to any
          third party claims relating to (a) your use of the Services (including
          any actions taken by a third party who logs in the Services as you),
          and (b) your violation of these Terms.
        </strong>
      </Content>
      <Content>
        <strong>
          Assignment. You may not assign, delegate or transfer these Terms or
          your rights or obligations hereunder, in any way (by operation of law
          or otherwise) without Measurable AI’s prior written consent. We may
          transfer, assign, or delegate these Terms and our rights and
          obligations without consent.
        </strong>
      </Content>
      <Content>
        <strong>
          Statute of Limitations. You agree that regardless of any statute or
          law to the contrary, any claim or cause of action arising out of or
          related to use of our Services or this Agreement must be filed within
          one (1) year after such claim or cause of action arose or be forever
          barred.
        </strong>
      </Content>
      <Content>
        <strong>
          Choice of Law; Arbitration. These Terms are governed by and will be
          construed under the laws of the State of California, without regard to
          the conflicts of laws provisions thereof. Any dispute arising from or
          relating to the subject matter of these Terms shall be finally settled
          in San Francisco County, California, in English, in accordance with
          the Streamlined Arbitration Rules and Procedures of Judicial
          Arbitration and Mediation Services, Inc. ("JAMS") then in effect, by
          one commercial arbitrator with substantial experience in resolving
          intellectual property and commercial contract disputes, who shall be
          selected from the appropriate list of JAMS arbitrators in accordance
          with such Rules. Judgment upon the award rendered by such arbitrator
          may be entered in any court of competent jurisdiction. Notwithstanding
          the foregoing obligation to arbitrate disputes, each party shall have
          the right to pursue injunctive or other equitable relief at any time,
          from any court of competent jurisdiction. For all purposes of this
          Agreement, the parties consent to exclusive jurisdiction and venue in
          the state or federal courts located in, respectively, San Francisco
          County, California, or the Northern District of California.
        </strong>
      </Content>
      <Content>
        <strong>
          Miscellaneous. You will be responsible for paying, withholding,
          filing, and reporting all taxes, duties, and other governmental
          assessments associated with your activity in connection with the
          Services, provided that the Measurable AI may, in its sole discretion,
          do any of the foregoing on your behalf or for itself as it sees fit.
          The failure of either you or us to exercise, in any way, any right
          herein shall not be deemed a waiver of any further rights hereunder.
          If any provision of these Terms is found to be unenforceable or
          invalid, that provision will be limited or eliminated, to the minimum
          extent necessary, so that these Terms shall otherwise remain in full
          force and effect and enforceable. You and Measurable AI agree that
          these Terms are the complete and exclusive statement of the mutual
          understanding between you and Measurable AI, and that it supersedes
          and cancels all previous written and oral agreements, communications
          and other understandings relating to the subject matter of these
          Terms. You hereby acknowledge and agree that you are not an employee,
          agent, partner, or joint venture of Measurable AI, and you do not have
          any authority of any kind to bind Measurable AI in any respect
          whatsoever. You and Measurable AI agree there are no third party
          beneficiaries intended under these Terms.
        </strong>
      </Content>
    </div>
  </div>
)

export default TermsSection
