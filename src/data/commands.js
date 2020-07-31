let data = [
    {
        command:"uname -a",
        use:"Display Linux system information",
        category:"System information"
    },
    {
        command:"uname -r",
        use:"Display kernel release information",
        category:"System information"
    },
    {
        command:"cat /etc/redhat-release",
        use:"Show which version of redhat installed",
        category:"System information"
    },
    {
        command:"uptime",
        use:"Show how long the system has been running + load",
        category:"System information"
    },
    {
        command:"hostname",
        use:"Show system host name",
        category:"System information"
    },
    {
        command:"hostname -I",
        use:"Display the IP address of the host",
        category:"System information"
    },
    {
        command:"last reboot",
        use:"Show system reboot history",
        category:"System information"
    },
    {
        command:"date",
        use:"Show the current date and time",
        category:"System information"
    },
    {
        command:"cal",
        use:"Show this month's calendar",
        category:"System information"
    },
    {
        command:"w",
        use:"Display who is online",
        category:"System information"
    },
    {
        command:"whoami",
        use:"Who you are logged in as",
        category:"System information"
    },
    {
        command:"dmesg",
        use:"Display messages in kernel ring buffer",
        category:"Hardware information"
    },
    {
        command:"cat /proc/cpuinfo",
        use:"Display CPU information",
        category:"Hardware information"
    },
    {
        command:"cat /proc/meminfo",
        use:"Display memory information",
        category:"Hardware information"
    },
    {
        command:"free -h",
        use:"Display free and used memory (-h for human readable, -m for MB, -g for GB)",
        category:"Hardware information"
    },
    {
        command:"lspci -tv",
        use:"Display PCI devices",
        category:"Hardware information"
    },
    {
        command:"lsusb -tv",
        use:"Display USB devices",
        category:"Hardware information"
    },
    {
        command:"dmidecode",
        use:"Display DMI / SMBIOS (hardware info) from the BIOS",
        category:"Hardware information"
    },
    {
        command:"hdparm -i /dev/sda",
        use:"Show info about disk sda",
        category:"Hardware information"
    },
    {
        command:"hdparm -tT /dev/sda",
        use:"Perform a read speed test on disk sda",
        category:"Hardware information"
    },
    {
        command:"badblocks -s /dev/sda",
        use:"Test for unreadable blocks on disk sda",
        category:"Hardware information"
    },
    {
        command:"top",
        use:"Display and manage the top processes",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"htop",
        use:"Interactive process viewer (top alternative)",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"mpstat 1",
        use:"Display processor related statistics",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"vmstat 1",
        use:"Display virtual memory statistics",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"iostat 1",
        use:"Display I/O statistics",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"tail 100 /var/log/messages",
        use:"Display the last 100 syslog messages (Use /var/log/syslog for Debian based systems)",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"tcpdump -i eth0",
        use:"Capture and display all packets on interface eth0",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"tcpdump -i eth0 'port 80'",
        use:"Monitor all traffic on port 80 (HTTP)",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"lsof",
        use:"List all open files on the system",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"lsof -u user",
        use:"List files opened by user",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"free -h",
        use:"Display free and used memory (-h for human readable, -m for MB, -g for GB)",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"watch df -h",
        use:"Execute 'df -h', showing periodic updates",
        category:"Performance Monitoring and Statistics"
    },
    {
        command:"id",
        use:"Display the user and group ids of your current user",
        category:"User Information and Management"
    },
    {
        command:"last",
        use:"Display the last users who have logged onto the system",
        category:"User Information and Management"
    },
    {
        command:"who",
        use:"Show who is logged into the system",
        category:"User Information and Management"
    },
    {
        command:"w",
        use:"Show who is logged in and what they are doing",
        category:"User Information and Management"
    },
    {
        command:"groupadd test",
        use:"Create a group named 'test'",
        category:"User Information and Management"
    },
    {
        command:"useradd -c 'John Smith' -m john",
        use:"Create an account named john, with a comment of 'John Smith' and create the user's home directory",
        category:"User Information and Management"
    },
    {
        command:"userdel john",
        use:"Delete the john account",
        category:"User Information and Management"
    },
    {
        command:"usermod -aG sales john",
        use:"Add the john account to the sales group",
        category:"User Information and Management"
    },
    {
        command:"ls -al",
        use:"List all files in a long listing (detailed) format",
        category:"File and Directory Commands"
    },
    {
        command:"pwd",
        use:"Display the present working directory",
        category:"File and Directory Commands"
    },
    {
        command:"mkdir directory",
        use:"Create a directory",
        category:"File and Directory Commands"
    },
    {
        command:"rm file",
        use:"Remove (delete) file",
        category:"File and Directory Commands"
    },
    {
        command:"rm -r directory",
        use:"Remove the directory and its contents recusively",
        category:"File and Directory Commands"
    },
    {
        command:"rm -rf directory",
        use:"Forcefully remove directory recursively",
        category:"File and Directory Commands"
    },
    {
        command:"cp file1 file 2",
        use:"Copy file1 to file2",
        category:"File and Directory Commands"
    },
    {
        command:"cp -r source_directory destination",
        use:"Copy source_directory recursively to destination. If destination exists, copy source_directory into destination, otherwise create destination with the contents of source_directory",
        category:"File and Directory Commands"
    },
    {
        command:"mv file1 file2",
        use:"Rename or move file1 to file2. If file2 is an existing directory, move file1 into directory file2",
        category:"File and Directory Commands"
    },
    {
        command:"ln -s /path/to/file linkname",
        use:"Create symbolic link to linkname",
        category:"File and Directory Commands"
    },
    {
        command:"touch file",
        use:"Create an empty file or update the access and modification times of file",
        category:"File and Directory Commands"
    },
    {
        command:"cat file",
        use:"View the contents of file",
        category:"File and Directory Commands"
    },
    {
        command:"less file",
        use:"Browse through a text file",
        category:"File and Directory Commands"
    },
    {
        command:"head file",
        use:"Display the first 10 lines of file",
        category:"File and Directory Commands"
    },
    {
        command:"tail file",
        use:"Display the last 10 lines of file",
        category:"File and Directory Commands"
    },
    {
        command:"tail -f file",
        use:"Display the last 10 lines of file and 'follow' the file as it grows",
        category:"File and Directory Commands"
    },
    {
        command:"ps",
        use:"Display your currently running process",
        category:"Process Management"
    },
    {
        command:"ps -ef",
        use:"Display all the currently running processes on the system",
        category:"Process Management"
    },
    {
        command:"ps -ef | grep processname",
        use:"Display process information for processname",
        category:"Process Management"
    },
    {
        command:"top",
        use:"Display and manage the top processes",
        category:"Process Management"
    },
    {
        command:"htop",
        use:"Interactive process viewer (top alternative)",
        category:"Process Management"
    },
    {
        command:"kill pid",
        use:"Kill process with process ID of pid",
        category:"Process Management"
    },
    {
        command:"killall processname",
        use:"Kill all processes named processname",
        category:"Process Management"
    },
    {
        command:"program &",
        use:"Start program in the background",
        category:"Process Management"
    },
    {
        command:"bg",
        use:"Display stopped or background jobs",
        category:"Process Management"
    },
    {
        command:"fg",
        use:"Brings the most recent background job to foreground",
        category:"Process Management"
    },
    {
        command:"fg n",
        use:"Brings job n to the foreground",
        category:"Process Management"
    },
    {
        command:"ifconfig -a",
        use:"Display all network interfaces and ip address",
        category:"Networking"
    },
    {
        command:"ifconfig eth0",
        use:"Display eth0 address and details",
        category:"Networking"
    },
    {
        command:"ethtool eth0",
        use:"Query or control network driver and hardware settings",
        category:"Networking"
    },
    {
        command:"ping host",
        use:"Send ICMP echo request to host",
        category:"Networking"
    },
    {
        command:"whois domain",
        use:"Display whois information for domain",
        category:"Networking"
    },
    {
        command:"dig domain",
        use:"Display DNS information for domain",
        category:"Networking"
    },
    {
        command:"dig -x IP_ADDRESS",
        use:"Reverse lookup of IP_ADDRESS",
        category:"Networking"
    },
    {
        command:"host domain",
        use:"Display DNS ip address for domain",
        category:"Networking"
    },
    {
        command:"hostname -i",
        use:"Display the network address of the host name",
        category:"Networking"
    },
    {
        command:"hostname -I",
        use:"Display all local ip addresses",
        category:"Networking"
    },
    {
        command:"wget http://domain.com/file",
        use:"Download http://domain.com/file",
        category:"Networking"
    },
    {
        command:"netstat -nutlp",
        use:"Display listening tcp and udp ports and corresponding programs",
        category:"Networking"
    },
    {
        command:"tar cf archive.tar directory",
        use:"Create tar named archive.tar containing directory",
        category:"Archives (Tar Files)"
    },
    {
        command:"tar xf archive.tar",
        use:"Extract the contents from archive.tar",
        category:"Archives (Tar Files)"
    },
    {
        command:"tar czf archive.tar.gz directory",
        use:"Create a gzip compressed tar file name archive.tar.gz",
        category:"Archives (Tar Files)"
    },
    {
        command:"tar xzf archive.tar.gz",
        use:"Extract a gzip compressed tar file",
        category:"Archives (Tar Files)"
    },
    {
        command:"tar cjf archive.tar.bz2 directory",
        use:"Create a tar file with bzip2 compression",
        category:"Archives (Tar Files)"
    },
    {
        command:"tar xjf archive.tar.bz2",
        use:"Extract a bzip2 compressed tar file",
        category:"Archives (Tar Files)"
    },
    {
        command:"yum search keyword",
        use:"Search for a package by keyword",
        category:"Installing Packages"
    },
    {
        command:"yum install package",
        use:"Install package",
        category:"Installing Packages"
    },
    {
        command:"yum info package",
        use:"Display description and summary information about package",
        category:"Installing Packages"
    },
    {
        command:"rpm -i package.rpm",
        use:"Install package from local file named package.rpm",
        category:"Installing Packages"
    },
    {
        command:"yum remove package",
        use:"Remove / Uninstall package",
        category:"Installing Packages"
    },
    {
        command:"tar zxvf sourcecode.tar.gz -> cd sourcecode -> ./configure -> make -> make install",
        use:"Install software from source code",
        category:"Installing Packages"
    },
    {
        command:"grep pattern file",
        use:"Search for pattern in file",
        category:"Search"
    },
    {
        command:"grep -r pattern directory",
        use:"Search recursively for pattern in directory",
        category:"Search"
    },
    {
        command:"locate name",
        use:"Find files and directories by name",
        category:"Search"
    },
    {
        command:"find /home/john -name 'prefix*'",
        use:"Find files in /home/john that start with 'prefix'",
        category:"Search"
    },
    {
        command:"find /home -size +100M",
        use:"Find files larger than 100MB in /home",
        category:"Search"
    },
    {
        command:"ssh host",
        use:"Connect to host as your local username",
        category:"SSH Logins"
    },
    {
        command:"ssh user@host",
        use:"Connect to host as user",
        category:"SSH Logins"
    },
    {
        command:"ssh -p port user@host",
        use:"Connect to host using port",
        category:"SSH Logins"
    },
    {
        command:"scp file.txt server:/tmp",
        use:"Secure copy file.txt to the /tmp folder on server",
        category:"File Transfers"
    },
    {
        command:"scp server:/var/www/*.html /tmp",
        use:"Copy *.html files from server to the local /tmp folder",
        category:"File Transfers"
    },
    {
        command:"scp -r server:/var/www/tmp",
        use:"Copy all files and directories recursively from server to the current system's /tmp folder",
        category:"File Transfers"
    },
    {
        command:"rsync -a /home /backups/",
        use:"Synchronize /home to /backups/home",
        category:"File Transfers"
    },
    {
        command:"rsync -avz /home server:/backups/",
        use:"Synchronize files/directories between the local and remote system with compression enabled",
        category:"File Transfers"
    },
    {
        command:"df -h",
        use:"Show free and used space on mounted filesystems",
        category:"Disk Usage"
    },
    {
        command:"df -i",
        use:"Show free and used inodes on mounted filesystems",
        category:"Disk Usage"
    },
    {
        command:"fdisk -l",
        use:"Display disks partitions sizes and types",
        category:"Disk Usage"
    },
    {
        command:"du -ah",
        use:"Display disk usage for all files and directories in human readable format",
        category:"Disk Usage"
    },
    {
        command:"du -sh",
        use:"Display total disk usage of the current directory",
        category:"Disk Usage"
    },
    {
        command:"cd ..",
        use:"To go up one level of the directory tree (Change into the parent directory)",
        category:"Directory Navigation"
    },
    {
        command:"cd",
        use:"Go to the $HOME directory",
        category:"Directory Navigation"
    },
    {
        command:"cd /etc",
        use:"Change to the /etc directory",
        category:"Directory Navigation"
    }
]

export { data };