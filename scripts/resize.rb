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
g = svg.elements[0]
g[:transform] = "translate(#{w}, #{h})"

puts doc.to_xml
