require 'nokogiri'

doc = Nokogiri::XML(File.new(ARGV[0]).read)
svg = doc.root

# puts doc.elements[0]

t = doc.root
w = t[:width].to_i
h = t[:height].to_i
t[:width] = '11px'
t[:height] = '11px'
t[:viewBox] = '0 0 11 11'

w = (11.0 - w) / 2
h = (11.0 - h) / 2

g = doc.create_element('g', transform: "translate(#{w}, #{h})")
t.elements.each{ |c|
  g.add_child(c)
}
svg.add_child(g)

puts doc.to_xml
