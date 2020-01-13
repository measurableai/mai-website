import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { title, content1, contentFontStyle } from "./style"

const Content = ({ ...props }) => (
  <p css={theme => [contentFontStyle(theme), content1]} {...props}></p>
)

const PrivacyPolicySection = props => (
  <div {...props}>
    <h1 css={title}>
      <FormattedMessage id="privacyPolicy" defaultMessage="PRIVACY  POLICY" />
    </h1>
    <Content>MAI Privacy Policy</Content>

    <Content> </Content>

    <Content>Effective date: May 29, 2019</Content>

    <Content>
      We at Measurable AI know you care about how your personal information is
      used and shared, and we take your privacy seriously. Please read the
      following to learn more about our Privacy Policy. This Privacy Policy is
      to inform you of our policies and practices regarding the collection,
      protection, use, sharing, and disclosure of information we collect when
      you visit our websites, and of the choices you can make about the way your
      information is collected, used, and shared.
    </Content>

    <Content>
      By using or accessing the Services in any manner, you acknowledge that you
      accept the practices and policies outlined in this Privacy Policy, and you
      hereby consent that we will collect, use, and share your information in
      the following ways.
    </Content>

    <Content>
      Remember that your use of Measurable AI’s Services is at all times subject
      to the Terms of Use, which incorporates this Privacy Policy. Any terms we
      use in this Policy without defining them have the definitions given to
      them in the Terms of Use.
    </Content>

    <Content>
      If you are a resident of the European Union ("EU"), United Kingdom,
      Lichtenstein, Norway, or Iceland, you may have additional rights under the
      EU General Data Protection Regulation (the "GDPR") with respect to your
      Personal Data. Please refer to our GDPR Privacy Notice for EU Residents
      for more details.
    </Content>

    <Content>What does this Privacy Policy cover?</Content>

    <Content>
      This Privacy Policy covers our treatment of personally identifiable
      information ("Personal Information") that we gather when you are accessing
      or using our Services, including the following products and services:
    </Content>

    <Content>
      Measurable AI (“MAI”): MAI is an enterprise facing website-based data
      dashboard platform available at https://measurable.ai/, which enables its
      subscribers to visualize market/industry trends and consumer/business
      insights.
    </Content>

    <Content>
      Note that this Privacy Policy does not cover the practices of companies we
      don’t own or control, or people that we don’t manage.
    </Content>

    <Content>
      As noted in the Terms of Use, we do not knowingly collect or solicit
      personal information from anyone under the age of 13. If you are under 13,
      please do not attempt to register for the Services or send any personal
      information about yourself to us. If we learn that we have collected
      personal information from a child under age 13, we will delete that
      information as quickly as possible. If you believe that a child under 13
      may have provided us personal information, please contact us at
      business@measurable.ai.
    </Content>

    <Content>Will Measurable AI ever change this Privacy Policy?</Content>

    <Content>
      We’re constantly trying to improve our Services, so we may need to change
      this Privacy Policy from time to time as well, but we will alert you to
      changes by placing a notice on the https://measurable.ai, by sending you
      an email, and/or by some other means. Please note that if you’ve opted not
      to receive legal notice emails from us (or you haven’t provided us with
      your email address), those legal notices will still govern your use of the
      Services, and you are still responsible for reading and understanding
      them. If you use the Services after any changes to the Privacy Policy have
      been posted, that means you agree to all of the changes. Use of
      information we collect now is subject to the Privacy Policy in effect at
      the time such information is used, unless this is prohibited by applicable
      laws or any contracts/policies to which we are bound, in which case, we’ll
      notify you and prompt you with the choices to either consent to or reject
      the updated Privacy Policy. If you reject the updated Privacy Policy, some
      features of the Services may not be available to you.
    </Content>

    <Content>What Information does Measurable AI Collect?</Content>

    <Content>Information You Provide to Us:</Content>

    <Content>
      We receive and store any information (including Personal Data about you)
      you knowingly provide to us. For example, when you register for the
      Services, we ask you for information that enables us to provide the
      Services, and we may require you to provide certain information, such as
      contact information (e.g. your name, username, company name, position,
      password, and email address). Certain information may be required to
      register with us or to take advantage of some of our features.
    </Content>

    <Content>
      We may communicate with you if you’ve provided us the means to do so. For
      example, we may send you promotional email offers about our Services or
      email you about your use of the Services. Also, we may receive a
      confirmation when you open an email from us. This confirmation helps us
      make our communications with you more interesting and improve our
      services. If you do not want to receive communications from us, please
      indicate your preference by “unsubscribe” in the email, or sending an
      email to business@measurable.ai to request. We may also use such data you
      provided to us to operate or improve the Service, to customize the
      Services for you.
    </Content>

    <Content>
      When you create your Measurable AI account, and authenticate with a
      third-party service (like Linkedin, Facebook or Google) we may collect,
      store, and periodically update information associated with that
      third-party account, such as your name, profile picture and email address.
      We will never publish through your third-party account without your
      permission.
    </Content>

    <Content> </Content>

    <Content>Information Collected Automatically:</Content>

    <Content>
      Whenever you interact with our Services, we automatically receive and
      record information on our server logs from your browser or device, which
      may include, but not limited to, “cookie” information, the type of browser
      and/or device you’re using to access our Services, and the page or feature
      you requested.
    </Content>

    <Content>
      “Cookies” are identifiers we transfer to your browser or device that allow
      us to recognize your browser or device and tell us how and when pages and
      features in our Services are visited and by how many people. You may be
      able to change the preferences on your browser or device to prevent or
      limit your device’s acceptance of cookies, but this may prevent you from
      taking advantage of some of our features. Also, if you click on a link to
      a third party website or service, a third party may also transmit cookies
      to you. Again, this Privacy Policy does not cover the use of cookies by
      any third parties, and we aren’t responsible for their privacy policies
      and practices. Please be aware that cookies placed by third parties may
      continue to track your activities online even after you have left our
      Services, and those third parties may not honor “Do Not Track” requests
      you have set using your browser or device.
    </Content>

    <Content>
      How will Measurable AI Use Any of the Personal Information it Receives?
    </Content>

    <Content>
      We process Personal Data to operate, improve, understand and personalize
      our Services. For example, we use Personal Data to:
    </Content>

    <Content>Provide support and assistance for the Services;</Content>

    <Content>Communicate with you about the Services;</Content>

    <Content>
      Contact you about Service announcements, updates or offers;
    </Content>

    <Content>Meet contract or legal obligations;</Content>

    <Content>Respond to user inquiries;</Content>

    <Content>Fulfill user requests;</Content>

    <Content>Comply with our legal or contractual obligations;</Content>

    <Content>Resolve disputes;</Content>

    <Content>Enforce our Terms of Service;</Content>

    <Content>
      Will Measurable AI Share Any of the Personal Information it Receives?
    </Content>

    <Content>
      We do not rent or sell your Personal Information in personally
      identifiable form to anyone, except as expressly provided below. We may
      share your Personal Information with third parties as described in this
      section:
    </Content>

    <Content>
      Agents: We employ other companies and people to perform tasks on our
      behalf and need to share your information with them to provide products or
      services to you; for example, we may use a payment processing Measurable
      AI to receive and process your credit card transactions for us. Unless we
      tell you differently, our agents do not have any right to use the Personal
      Information we share with them beyond what is necessary to assist us.
    </Content>

    <Content>
      User Profiles and Submissions: Certain user profile information, such as
      your name, location, or image content that such user has uploaded to the
      Services, may be displayed to other users to facilitate user interaction
      within the Services or address your request for our services. Please
      remember that any content you upload to your public user profile, along
      with any Personal Information or content that you voluntarily disclose
      online in a manner other users can view (on discussion boards, in messages
      and chat areas, etc.) becomes publicly available, and can be collected and
      used by anyone. Your user name may also be displayed to other users if and
      when you send comments or upload images through the Services and other
      users can contact you through comments other means allowed by the
      functionality of the Services.
    </Content>

    <Content>
      Business Transfers: We may choose to buy or sell assets, and may share
      and/or transfer customer information in connection with the evaluation of
      and entry into such transactions. Also, if we (or our assets) are
      acquired, or if we go out of business, enter bankruptcy, or go through
      some other change of control, Personal Information could be one of the
      assets transferred to or acquired by a third party.
    </Content>

    <Content>
      Protection of Measurable AI and Others: We reserve the right to access,
      read, preserve, and disclose any information that we believe is necessary
      to comply with law or court order; enforce or apply our Terms of Use and
      other agreements; or protect the rights, property, or safety of Measurable
      AI, our employees, our users, or others.
    </Content>

    <Content>Is Personal Information about me secure?</Content>

    <Content>
      You must prevent unauthorized access to your email accounts associated
      with our Services and Personal Information by selecting and protecting
      your third party credentials, such password and/or other sign-on
      mechanism, appropriately and limiting access to your computer or device
      and browser by signing off after you have finished accessing your email
      accounts in the Services.
    </Content>

    <Content>
      We seek to protect Personal Data using appropriate technical and
      organizational measures based on the type of Personal Information and
      applicable processing activity. For example, all Personal Information is
      transferred via Transport Layer Security (TLS) technology and stored
      encrypted at rest using AES-256 encryption. All Personal Information
      stored on our Services is hosted on Amazon Web Services (AWS) and
      Microsoft Azure, which undergo various third-party independent audits on a
      regular basis, covering compliance controls for its data centers,
      infrastructure, and operations. This includes SOC 2 certification and ISO
      27001 certification.
    </Content>

    <Content>
      We endeavor to protect the privacy of your email accounts and other
      Personal Information we hold in our records by reasonable data security
      measures in the similar industry, but unfortunately, we cannot guarantee
      complete security. Unauthorized entry or use, hardware or software
      failure, and other factors, may compromise the security of user
      information at any time.
    </Content>

    <Content>
      How long does Measurable AI retain my Personal Information?
    </Content>

    <Content>
      We retain Personal Data about you for as long as you have an open account
      with us or as otherwise necessary to provide you Services. In some cases
      we retain Personal Data for longer, if doing so is necessary to comply
      with our legal obligations, resolve disputes or collect fees owed, or is
      otherwise permitted or required by applicable law, rule or regulation.
      Afterwards, we retain some information in an aggregated and anonymized
      form not in a way that would identify you personally. If you want to close
      your account, please send us a clear written request to
      business@measurable.ai. Please refer to “What Choices do I have?” below
      for more information regarding how to delete your Personal Information.
    </Content>

    <Content>What Personal Information can I access?</Content>

    <Content>
      Through the settings provided by the Services, you may access, and, in
      some cases, edit or delete the following information you’ve provided to
      us:
    </Content>

    <Content>name</Content>

    <Content>email address</Content>

    <Content>
      The information you can view, update, and delete may change as the
      Services change. If you have any questions about viewing or updating
      information we have on file about you, please contact us at
      business@measurable.ai.
    </Content>

    <Content>
      California residents are entitled to ask us for a notice identifying the
      categories of Personal Information which we share with our affiliates
      and/or third parties for marketing purposes, and providing contact
      information for such affiliates and/or third parties. If you are a
      California resident and would like a copy of this notice, please submit a
      written request to: business@measurable.ai.
    </Content>

    <Content>What choices do I have?</Content>

    <Content>
      You can always opt not to disclose information to us, but keep in mind
      some information may be needed to register with us or to take advantage of
      some of our features.
    </Content>

    <Content>
      You may be able to add, update, or delete information as explained above.
      When you update information, however, we may maintain a copy of the
      unrevised information in our records.
    </Content>

    <Content>
      Please note that uninstalling the Measurable AI application from your
      mobile device does not delete your Personal Information we hold in our
      records. If you want to disassociate your email accounts from our Services
      and delete the Personal Information, you should request such deletion by
      sending a clear written request to us at business@measurable.ai. Some
      information may remain in our records after the deletion, but only in a
      way that would not identify you personally. We may use any aggregated data
      derived from or incorporating your Personal Information after you update
      or delete it, but not in a manner that would identify you personally.
    </Content>

    <Content>International Users</Content>

    <Content>
      Measurable AI and many of its service providers are based in the United
      States. If you use the Service, please be aware that your Personal
      Information will be transferred to, processed, and used in the United
      States and other countries where we and our service providers maintain
      data processing facilities. If you are located in the European Union,
      Switzerland or other regions with laws governing data collection and use
      that may differ from U.S. law, please note that we may transfer
      information, including your personal information, to a country and
      jurisdiction that does not have the same data protection laws as your
      jurisdiction and please refrain from using our Services. By using our
      Services, you consent to the transfer of information to the U.S. or any
      other country in which we or our parent, subsidiaries, affiliates or
      service providers maintain facilities and the use and disclosure of
      information about you as described in this Privacy Policy.
    </Content>

    <Content>What if I have questions about this policy?</Content>

    <Content>
      If you have any questions or concerns regarding our privacy policies,
      please send us a detailed message to business@measurable.ai, and we will
      try to resolve your concerns.
    </Content>

    <Content>GDPR PRIVACY NOTICE FOR EU RESIDENTS</Content>
    <Content>
      If you are a resident of the European Union (“EU”), United Kingdom,
      Lichtenstein, Norway, or Iceland, you may have additional rights under the
      EU General Data Protection Regulation (the “GDPR”) with respect to your
      Personal Data, as outlined below.
    </Content>

    <Content>
      For this GDPR Privacy Notice, we use the terms “Personal Data” and
      “processing” as they are defined in the GDPR, but “Personal Data”
      generally means information that can be used to individually identify a
      person, and “processing” generally covers actions that can be performed in
      connection with data such as collection, use, storage and disclosure.
      Company will be the controller of your Personal Data processed in
      connection with the Services.
    </Content>

    <Content>
      Where applicable, this GDPR Privacy Notice is intended to supplement, and
      not replace, the Company’s Privacy Policy at
      [https://beta.measurable.ai/privacy] (the “Privacy Policy”). If there are
      any conflicts between this GDPR Privacy Notice and the Company’s Privacy
      Policy, the policy or portion that is more protective of Personal Data
      shall control to the extent of such conflict. If you have any questions
      about this notice or whether any of the following applies to you, please
      contact us at privacy@Measurable AI.com.
    </Content>

    <Content>What Personal Data Do We Collect From You?</Content>

    <Content>
      We collect Personal Data about you when you provide such information
      directly to us, when third parties such as our business partners or
      service providers provide us with Personal Data about you, or when
      Personal Data about you is automatically collected in connection with your
      use of our Services.
    </Content>

    <Content>
      Information we collect directly from you: We receive Personal Data
      directly from you when you provide us with such Personal Data, including
      without limitation the following:
    </Content>

    <Content>First and last name</Content>

    <Content>Email address</Content>

    <Content>
      User content, for example, comments, posts, or other feedback you submit
      publically (which can include Personal Data if you include Personal Data
      in such content)
    </Content>

    <Content>
      Information we receive from third party sources: Some third parties such
      as Google, Facebook, Linkedin provide us with Personal Data about you,
      such as the following:
    </Content>

    <Content>
      Account information for third party services: If you interact with a third
      party service when using our Services, such as if you use a third party
      service to log-in to our Services (e.g., Google, Facebook, Linkedin), the
      third party service will send us information about you, such as email
      address, profile picture and name.
    </Content>

    <Content>
      Information from our advertising partners: We receive information about
      you from some of our service providers who assist us with marketing or
      promotional services related to how you interact with our websites,
      applications, products, services, advertisements or communications.
    </Content>

    <Content>
      Information we automatically collect when you use our Services: Some
      Personal Data is automatically collected when you use our Services, such
      as the following:
    </Content>

    <Content>
      Cookies and other tracking technologies (e.g. web beacons, pixel tags,
      SDKs, etc.)
    </Content>

    <Content>How Do We Use Your Personal Data?</Content>

    <Content>
      We process Personal Data to operate, improve, understand and personalize
      our Services. For example, we use Personal Data to:
    </Content>

    <Content>Provide support and assistance for the Services</Content>

    <Content>Communicate with you about the Services</Content>

    <Content>
      Contact you about Service announcements, updates or offers
    </Content>

    <Content>Meet contract or legal obligations</Content>

    <Content>Respond to user inquiries</Content>

    <Content>Fulfill user requests</Content>

    <Content>Comply with our legal or contractual obligations</Content>

    <Content>Resolve disputes</Content>

    <Content>Enforce our Terms of Service</Content>

    <Content>How and With Whom Do We Share Your Data?</Content>

    <Content>
      We share Personal Data with vendors, third party service providers and
      agents who work on our behalf and provide us with services related to the
      purposes described in this Privacy Policy or our Terms of Service. These
      parties include:
    </Content>

    <Content>Fraud prevention service providers</Content>

    <Content>Hosting service providers</Content>

    <Content>Telecommunications service providers</Content>

    <Content>
      We also share Personal Data when necessary to complete a transaction
      initiated or authorized by you or provide you with a product or service
      you have requested. In addition to those set forth above, these parties
      also include:
    </Content>

    <Content>
      Other users (where you post information publicly or as otherwise necessary
      to effect a transaction initiated or authorized by you through the
      Services)
    </Content>

    <Content>
      Social media services (if you interact with them through your use of the
      Services)
    </Content>

    <Content>
      Third party business partners who you access through the Services
    </Content>

    <Content>Other parties authorized by you</Content>

    <Content>
      We also share Personal Data when we believe it is necessary to:
    </Content>

    <Content>
      Comply with applicable law or respond to valid legal process, including
      from law enforcement or other government agencies
    </Content>

    <Content>
      Protect us, our business or our users, for example to enforce our terms of
      service, prevent spam or other unwanted communications and investigate or
      protect against fraud
    </Content>

    <Content>Maintain the security of our products and services</Content>

    <Content>
      We also share information with third parties when you give us consent to
      do so.
    </Content>

    <Content>
      Last, we share Personal Data with our affiliates or other members of our
      corporate family. Furthermore, if we choose to buy or sell assets, user
      information is typically one of the transferred business assets. Moreover,
      if we, or substantially all of our assets, were acquired, or if we go out
      of business or enter bankruptcy, user information would be one of the
      assets that is transferred or acquired by a third party, and we would
      share Personal Data with the party that is acquiring our assets. You
      acknowledge that such transfers may occur, and that any acquirer of us or
      our assets may continue to use your Personal Information as set forth in
      this policy.
    </Content>

    <Content>How Long Do We Retain Your Personal Data?</Content>

    <Content>
      We retain Personal Data about you for as long as you have an open account
      with us. In some cases we retain Personal Data for longer, if doing so is
      necessary to comply with our legal obligations, resolve disputes or
      collect fees owed, or is otherwise permitted or required by applicable
      law, rule or regulation. Afterwards, we retain some information in a
      depersonalized or aggregated form but not in a way that would identify you
      personally.
    </Content>

    <Content>What Security Measures Do We Use?</Content>

    <Content>
      We seek to protect Personal Data using appropriate technical and
      organizational measures based on the type of Personal Data and applicable
      processing activity. For example, All Personal Data is transferred via
      Transport Layer Security (TLS) technology and stored encrypted at rest
      using AES-256 encryption. All Personal Data is stored on Benchling is
      hosted on Amazon Web Services (AWS) and Microsoft Azure, which undergo
      various third-party independent audits on a regular basis, covering
      compliance controls for its data centers, infrastructure, and operations.
      This includes SOC 2 certification and ISO 27001 certification.
    </Content>

    <Content>Personal Data of Children:</Content>

    <Content>
      As noted in the Terms of Use, we do not knowingly collect or solicit
      Personal Data from anyone under the age of 16. If you are under 16, please
      do not attempt to register for the Services or send any Personal Data
      about yourself to us. If we learn that we have collected Personal Data
      from a child under age 16, we will delete that information as quickly as
      possible. If you believe that a child under 16 may have provided us
      Personal Data, please contact us at privacy@Measurable AI.com
    </Content>

    <Content>What Rights Do You Have Regarding Your Personal Data?</Content>

    <Content>
      You have certain rights with respect to your Personal Data, including
      those set forth below. For more information about these rights, or to
      submit a request, please email business@measurable.ai. Please note that in
      some circumstances, we may not be able to fully comply with your request,
      such as if it is frivolous or extremely impractical, if it jeopardizes the
      rights of others, or if it is not required by law, but in those
      circumstances, we will still respond to notify you of such a decision. In
      some cases, we may also need to you to provide us with additional
      information, which may include Personal Data, if necessary to verify your
      identity and the nature of your request.
    </Content>

    <Content>
      Access: You can request more information about the Personal Data we hold
      about you and request a copy of such Personal Data. You can also access
      certain of your Personal Data by sending us an email at
      business@measurable.ai
    </Content>

    <Content>
      Rectification: If you believe that any Personal Data we are holding about
      you is incorrect or incomplete, you can request that we correct or
      supplement such data. You can correct some of this information directly by
      sending us an email at business@measurable.ai.
    </Content>

    <Content>
      Erasure: You can request that we erase some or all of your Personal Data
      from our systems.
    </Content>

    <Content>
      Withdrawal of Consent: If we are processing your Personal Data based on
      your consent (as indicated at the time of collection of such data), you
      have the right to withdraw your consent at any time. Please note, however,
      that if you exercise this right, you may have to then provide express
      consent on a case-by-case basis for the use or disclosure of certain of
      your Personal Data, if such use or disclosure is necessary to enable you
      to utilize some or all of our Services.
    </Content>

    <Content>
      Portability: You can ask for a copy of your Personal Data in a
      machine-readable format. You can also request that we transmit the data to
      another controller where technically feasible.
    </Content>

    <Content>
      Objection: You can contact us to let us know that you object to the
      further use or disclosure of your Personal Data for certain purposes, such
      as for direct marketing purposes.
    </Content>

    <Content>
      Restriction of Processing: You can ask us to restrict further processing
      of your Personal Data.
    </Content>

    <Content>
      Right to File Complaint: You have the right to lodge a complaint about
      Company’s practices with respect to your Personal Data with the
      supervisory authority of your country or EU Member State.
    </Content>

    <Content>Transfers of Personal Data:</Content>

    <Content>
      The Services are hosted and operated in the United States (“U.S.”) through
      Company and its service providers, and if you do not reside in the U.S.,
      laws in the U.S. may differ from the laws where you reside. By using the
      Services, you acknowledge that any Personal Data about you, regardless of
      whether provided by you or obtained from a third party, is being provided
      to Company in the U.S. and will be hosted on U.S. servers, and you
      authorize Company to transfer, store and process your information to and
      in the U.S., and possibly other countries. You hereby consent to the
      transfer of your data to the U.S. as set forth herein.
    </Content>

    <Content>
      Company is committed to the Principles of the EU-U.S. Privacy Shield
      Framework set forth by the U.S. Department of Commerce regarding the
      collection and use of Personal Data transferred from the EU. These
      Principles are (1) notice, (2) consent, (3) accountability for onward
      transfer, (4) security, (5) data integrity and purpose limitation, (6)
      access and (7) recourse, enforcement and liability with respect to all
      Personal Data received from within the EU in reliance on the Privacy
      Shield. The Privacy Shield Principles require that we remain potentially
      liable if any third party processing Personal Data on our behalf fails to
      comply with these Privacy Shield Principles (except to the extent we are
      not responsible for the event giving rise to any alleged damage).
      Company’s compliance with the Privacy Shield is subject to the
      investigatory and enforcement powers of the U.S. Federal Trade Commission.
      For more information about the Privacy Shield Program, please visit
      www.privacyshield.gov.
    </Content>

    <Content>
      Please contact us at business@measurable.ai with any questions or concerns
      relating to the Privacy Shield. If you do not receive timely
      acknowledgment of your Privacy Shield-related complaint from us, or if we
      have not resolved your complaint, you may also resolve a Privacy
      Shield-related complaint through JAMS, an alternative dispute resolution
      provider located in the United States. You can visit
      https://www.jamsadr.com/file-an-eu-us-privacy-shield-or-safe-harbor-claim
      for more information or to file a complaint, at no cost to you. Under
      certain conditions, you may also be entitled to invoke binding arbitration
      for complaints not resolved by other means.
    </Content>

    <Content>What If You Have Questions Regarding Your Personal Data?</Content>

    <Content>
      If you have any questions about this GDPR Privacy Notice or our data
      practices generally, please contact us using the following information:
    </Content>

    <Content>Name: Measurable AI</Content>

    <Content>
      Physical address: 118 Wai Yip Street, Kwun Tong, Hong Kong
    </Content>

    <Content>Email address for contact: business@measurable.ai</Content>

    <Content>Designated representative and contact information</Content>

    <Content>DP-Dock GmbH</Content>

    <Content>Ballindamm 39</Content>

    <Content>20095 Hamburg</Content>

    <Content>Tel.: +49 (0) 40 99999 – 3430</Content>

    <Content>Mob.: +49 (0) 172 918 22 22</Content>

    <Content>E-Mail: mailtime@gdpr-rep.com</Content>

    <Content>Data Protection Officer and contact information</Content>

    <Content>Carson Ip, business@measurable.ai</Content>
  </div>
)

export default PrivacyPolicySection
