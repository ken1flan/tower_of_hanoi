class TowerOfHanoi
  def initialize(disk_number)
    @sticks = {first: (1..disk_number).to_a.reverse, second: [], third: []}
  end
  
  def move(from: :first, to: :third, disk_number: 1)
    if disk_number == 1
      @sticks[to].push @sticks[from].pop
      puts @sticks
    else
      work = @sticks.keys.select {|k| k != from && k != to}.first
      move(from: from, to: work, disk_number: disk_number - 1)
      @sticks[to].push @sticks[from].pop
      puts @sticks
      move(from: work, to: to, disk_number: disk_number - 1)
    end
  end
end

hanoi = TowerOfHanoi.new(4)
hanoi.move(from: :first, to: :third, disk_number: 4)

