<PanelGroup accordion defaultActiveKey="1">
  <Panel className="purchase" eventKey="1">
    <Panel.Heading>
      <Panel.Title toggle>See Item details</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      <span className="purchase chairImage">
        <img
          className="chair"
          alt="Chair Pic"
          src="https://i5.walmartimages.com/asr/e01e48ef-4f28-43c5-a8f4-c90ee35568d6_1.3b1a8a31df477ebeb1a0dab6d8388bf9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
        />{" "}
      </span>
      <span className="chairDescription">
        Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.{" "}
      </span>
    </Panel.Body>
  </Panel>

  <Panel eventKey="2">
    <Panel.Heading>
      <Panel.Title toggle>Apply Promo Code</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      <span className="">
        <input type="text" name="promo" />{" "}
      </span>
      <span className="">
        <input type="submit" value="Apply" />
      </span>
    </Panel.Body>
  </Panel>
</PanelGroup>